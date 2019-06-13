const fs = require("fs");
const path = require("path");
const { yargs } = require("./yargs");
const { filePath } = require("../config/config");

/**
 * 同步读取文件内容
 * @param {String} fileName 文件名(不带后缀)
 * @returns {String} 成功返回string
 * @returns {Object} 失败返回{message: '读取文件失败', error: Object}
 */
const readContentSync = (fileName) => {
  try {
    return fs.readFileSync(path.resolve(filePath, yargs.m, fileName + '.html'));
  } catch(e) {
    return {
      message: '读取文件失败',
      error: e
    }
  }
};

exports.readContentSync = readContentSync;
