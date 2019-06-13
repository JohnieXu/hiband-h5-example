// 缓存账号密码
const { yargs } = require("../gulpfile");
const inquirer = require("inquirer");

let info = {};

/**
 * 从环境变量获取账号密码
 * @returns {Object} {account: String, password: String}
 */
const getAccountInfo = (yargs = {}) => {
    info.account = yargs.account;
    info.password = yargs.password;
    return info;
};

/**
 * 账号密码校验&账号信息录入prompt
 * @param {Object} _info 账号信息 可选
 * @param {Promise} 返回Promise
 */
const checkAccountInfo = async (_ifno = ifno) => {
    if (_ifno.account && !_ifno.password) {
        const answer = await inquirer.prompt([
            {
                type: "password",
                name: "password",
                message: "请输入" + yargs.m + "站 账号" + _ifno.account + "的密码："
            }
        ]);
        return info = { ...info, ...answer };
    }
    if (!_info.account) {
        const answer = await inquirer.prompt([
            {
                type: "string",
                name: "account",
                message: "请输入" + yargs.m + "账号："
            },
            {
                type: "password",
                name: "password",
                message: "请输入" + yargs.m + "密码："
            }
        ]);
        return info = answer;
    }
};

exports.getAccountInfo = getAccountInfo;
exports.checkAccountInfo = checkAccountInfo;
