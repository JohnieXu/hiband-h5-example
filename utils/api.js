const fs = require("fs");
const rp = require("request-promise");
const { yargs } = require("./yargs");
const { getCookie } = require("./cookie");
const { BASE_URL } = require("../config/url");

/**
 * 根据node环境变量获取当前的打包模式 dev|test|prod
 * @param {String} `dev|test|prod`
 */
const getMode = () => {
    let mode = process.env.MODE;
    if (
        !["dev", "test", "prod", "DEV", "TEST", "PROD"].includes(
            yargs.m
        )
    ) {
        throw Error("请在Node环境变量中指定MODE：dev|test|prod");
    }
    return mode;
};

const MODE = getMode();
const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";
const baseHeaders = {
    "cache-control": "no-cache",
    Connection: "keep-alive",
    "accept-encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    Accept: "*/*",
    "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    Cookie: getCookie(MODE)
};
const baseOptions = {
    method: "POST"
};

const defaultCsrf =
    "en8lGrTDQ78adg_Rl5vZTC4oCJ_TkNFMantbBVF8PR8KJ2RZzIoPh2NPSbX99O4bbFpCxrf6visSFz5DJAp1Mg==";

const genOptions = (
    title = "未命名",
    path,
    headers,
    baseUrl = BASE_URL[MODE] + "/file/upload"
) => {
    return {
        method: "POST",
        uri: baseUrl,
        formData: {
            title: title,
            Filedata: fs.createReadStream(__dirname + path)
        },
        headers
    };
};

/**
 * 登陆
 * @param {string} account 账号
 * @param {string} password 密码
 * @param {string} mode 类别 test测试站|prod正式站
 * @param {string} csrf csrf验证码
 */
const login = async (account, password, mode = MODE, csrf = defaultCsrf) => {
    if (!account || !password) {
        throw new Error("请输入account|password|mode");
    }
    const options = {
        ...baseOptions,
        uri: BASE_URL[yargs.m] + "/passport/login",
        form: {
            _csrf: csrf,
            "LoginForm[username]": account,
            "LoginForm[password]": password,
            "LoginForm[rememberMe]": [0, 1],
            "login-button": ""
        },
        headers: baseHeaders
    };
    try {
        const res = await rp(options);
        return {
            code: 3,
            message: JSON.stringify(res)
        };
    } catch (err) {
        if (err.statusCode === 302) {
            const {
                response: { headers = {} }
            } = err;
            console.log(headers);
            if (!headers["set-cookie"]) {
                return console.log(`登陆失败：\n${err}`);
            }
            return {
                code: 0,
                cookie: headers["set-cookie"]
            };
        }
        if (err.statusCode === 400) {
            console.log("cookie/csrf等参数错误");
            return {
                code: 1,
                message: "cookie/csrf等参数错误"
            };
        }
        console.log("未知错误", err.statusCode);
        console.log(`请前往${BASE_URL[MODE]}页面进行登陆以获取cookie`);
        return {
            code: 2,
            message: "未知错误：" + err.statusCode
        };
    }
};

/**
 * 上传文件
 * @param {Array} filesArr 文件列表
 * @returns {Promise} 返回Promise
 */
const uploadFiles = async (filesArr) => {
    const cookie = await getCookie(MODE, path.resolve(__dirname, '../config/cookie.' + MODE + '.txt'));
    const promiseArr = filesArr.map(({ title, path }) => {
        return rp(genOptions(title, path, { ...baseHeaders, Cookie: cookie }))
            .then(res => {
                jsonRes = JSON.parse(res);
                if (!jsonRes.path) {
                    return Promise.reject(jsonRes);
                }
                return {
                    ...jsonRes,
                    full_path: `/${jsonRes.path}`
                };
            })
            .catch(err => console.log(err));
    });

    return Promise.all(promiseArr)
        .then(values => {
            console.log(values);
            // TODO: 过滤上传失败文件
            if (!values) {
                return console.log("上传失败");
            }
            fs.writeFile(
                `upload_file_result_${process.env.MODE}.json`,
                JSON.stringify(values, null, 4),
                err => {
                    if (err) return console.log(err);
                    console.log(
                        `文件上传成功！上传结果保存在\`./upload_file_result.${
                            process.env.MODE
                        }.json\``
                    );
                }
            );
        })
        .catch(err => console.log(err));
};

const deleteFile = id => {
    const errorMap = new Map([[404, "文件不存在"], [302, "已成功删除"]]);
    const genOptions = id => ({
        method: "POST",
        uri: BASE_URL[MODE] + "/file/delete" + `?id=${id}`,
        headers: {
            Cookie: getCookie(MODE),
            "User-Agent": USER_AGENT
        }
    });
    const promiseArr = Array.isArray(id)
        ? id.map(id =>
              rp(genOptions(id))
                  .then(res => JSON.parse(res))
                  .then(json => {
                      console.log(json.statusCode);
                  })
                  .catch(err => {
                      // console.log(err.statusCode);
                      if (!errorMap.get(err.statusCode)) {
                          return console.log(err);
                      }
                      return console.log(
                          `${id}: ${errorMap.get(err.statusCode)}`
                      );
                  })
          )
        : [
              rp(genOptions(id))
                  .then(res => JSON.parse(res))
                  .then(json => {
                      console.log(json.statusCode);
                  })
                  .catch(err => {
                      // console.log(err.statusCode);
                      if (!errorMap.get(err.statusCode)) {
                          return console.log(err);
                      }
                      return console.log(
                          `${id}: ${errorMap.get(err.statusCode)}`
                      );
                  })
          ];

    Promise.all(promiseArr);
};

const postPage = async (
    { id = "", title, name, content, layout },
    { cookie, mode }
) => {
    const errorMap = new Map([
        [404, "页面不存在"],
        [302, "成功"],
        [200, "成功"]
    ]);
    const options = {
        method: "POST",
        uri: BASE_URL[mode] + "/post/save",
        headers: {
            Cookie: cookie,
            "User-Agent": USER_AGENT
        },
        form: {
            id,
            title,
            name,
            "content[]": content,
            "meta[layout]": layout,
            act: "create",
            type: "page",
            parent_id: "",
            menu_order: "",
            "meta[keywords]": "",
            "meta[styleFile]": "",
            author: "",
            sub_title: "",
            summary: "",
            source: "",
            _csrf:
                "z8SK9kwkYDRW4mG_jFocQjMzsdoCRBk_XKYuTiUt2eyns---Fn4TdgWBJNW_N1kxfAuHgmsXLwY3y1oXCEOghQ=="
        }
    };
    return rp(options)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err. statusCode);
            fs.writeFileSync(__dirname + '/postPage.err.json', JSON.stringify(err, null, 4), { encoding: 'utf-8' });
            if (!errorMap.get(err.statusCode)) {
                return console.log(err);
            }
            return console.log(errorMap.get(err.statusCode));
        });
};

const deletePage = id => {
    const errorMap = new Map([[404, "页面不存在"], [302, "已成功删除"]]);
    const genOptions = id => ({
        method: "POST",
        uri: BASE_URL[MODE] + "/post/delete" + `?id=${id}&type=page`,
        headers: {
            Cookie: getCookie(MODE),
            "User-Agent": USER_AGENT
        },
        form: {
            _csrf:
                "zt11nOGGqfCYF-2DQT2oEsR7H4HvAquPiJwrTd9-qPmmqhDUu9zasst0qOlyUO1hi0Mp2YZRnbbj8V8U8hDRkA=="
        }
    });
    const promiseArr = Array.isArray(id)
        ? id.map(id =>
              rp(genOptions(id))
                  .then(res => JSON.parse(res))
                  .then(json => {
                      console.log(json.statusCode);
                  })
                  .catch(err => {
                      // console.log(err.statusCode);
                      if (!errorMap.get(err.statusCode)) {
                          return console.log(err);
                      }
                      return console.log(
                          `${id}: ${errorMap.get(err.statusCode)}`
                      );
                  })
          )
        : [
              rp(genOptions(id))
                  .then(res => JSON.parse(res))
                  .then(json => {
                      console.log(json.statusCode);
                  })
                  .catch(err => {
                      // console.log(err.statusCode);
                      if (!errorMap.get(err.statusCode)) {
                          return console.log(err);
                      }
                      return console.log(
                          `${id}: ${errorMap.get(err.statusCode)}`
                      );
                  })
          ];

    Promise.all(promiseArr);
};

exports.login = login;
exports.uploadFiles = uploadFiles;
exports.deleteFile = deleteFile;
exports.postPage = postPage;
exports.deletePage = deletePage;
