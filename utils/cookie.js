const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { yargs } = require("../gulpfile");
const { login } = require("./api");

let COOKIE = {};

const defaultLoginUrl = "/passort/login";


/**
 * 从终端录入cookie&本地存储
 * @returns {Promise} 返回cookie
 */
const inputCookie = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "cookie",
      message: "请输入cookie"
    }
  ]);
  await setLocalCookie(confirm, path.resolve(__dirname, '../config/'), yargs.m);
  return answer.cookie;
}

/**
 * 从本地/内存/登陆接口获取cookie 获取顺序内存=>文件=>登陆接口 最终cookie都会存到内存变量COOKIE中
 * @param {string} mode 当前node环境 dev|test|prod default: test
 * @param {string} path 保存cookie的绝对路径(以/结尾)
 * @param {string} loginUrl 登陆地址(eg: /passort/login)
 * @returns {Promise} 返回Promise
 */
const getCookie = async (mode = "test", path, loginUrl = defaultLoginUrl) => {
    let cookie = COOKIE[mode];
    if (!path) {
        return;
    }
    // 内存变量
    if (cookie) {
      return cookie;
    }
    // 文件
    try {
        cookie = fs.readFileSync(path + "cookie." + mode + ".txt", {
            encoding: "utf-8"
        });
    } catch (e) {
        console.log(e);
    }
    COOKIE[mode] = cookie;
    if (cookie) {
      return cookie;
    }
    // TODO: 登陆接口
    // cookie = await login();
    // COOKIE[mode] = cookie;
    await setLocalCookie(cookie, path, mode);
    return cookie;
};

/**
 * 保存cookie到内存变量中
 * @param {string} cookie cookie
 * @param {string} mode 当前node环境 dev|test|prod
 */
const setCookie = (cookie, mode = "test") => {
    if (!cookie) {
        throw new Error("param cookie is required");
    }
    COOKIE[mode] = cookie;
};

/**
 * 保存cookie到本地文件中
 * @param {string} cookie cookie
 * @param {string} path 保存到本地文件的路径(绝对路径 不包含文件名)
 * @param {string} mode 当前node环境 dev|test|prod
 * @returns {Promise} Promise对象
 */
const setLocalCookie = (cookie, path, mode = "test") => {
    if (!cookie || !path) {
        throw new Error("params cookie and path are required");
    }
    try {
        return new Promise((resolve, reject) => {
            fs.writeFileSync(path + "cookie." + mode + ".txt", cookie);
            resolve(cookie);
        });
    } catch (e) {
        return Promise.reject(e);
    }
};

exports.COOKIE = COOKIE;
exports.inputCookie = inputCookie;
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.setLocalCookie = setLocalCookie;
