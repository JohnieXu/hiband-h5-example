var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var smushit = require('gulp-smushit');
var template = require('gulp-art-include');
var postcss = require('gulp-html-postcss');
var htmlsplit = require('gulp-htmlsplit');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var inquirer = require('inquirer');
var fs = require("fs");
var { yargs } = require("./utils/yargs");
var data = require("./config/data");
var { readContentSync } = require("./utils/file");
var { login, postPage } = require("./utils/api");

var cookie;


/**
 * 主要功能:
 * 1.图片文件压缩
 * 2.编译压缩html模板
 * 3.编译压缩css，处理兼容性
 * 4.分割html文件，分为测试站和正式站
 * 5.上传图片文件到服务器，分为测试站与正式站
 * 6.发布构建文件到服务器，分为测试站正式站以及新建与更新
 * 7.启动开发环境静态资源服务，浏览器同步刷新
 */

var paths = {
  dev: {
    delHtml: 'dist/dev/*.html',
    imageSrc: 'src/assets/*@3x.{png,jpg}',
    imageDest: 'dist/dev/assets',
    buildHtmlSrc: 'src/*.html',
    buildHtmlDest: 'dist/dev',
    watchHtml: ['src/*.html', 'config/data.js']
  },
  test: {
    delHtml: 'dist/test/*.html',
    imageSrc: 'src/assets/*@3x.{png,jpg}',
    imageDest: 'dist/test/assets',
    buildHtmlSrc: 'src/*.html',
    buildHtmlDest: 'dist/test',
    watchHtml: ['src/*.html', 'config/data.js']
  },
  prod: {
    delHtml: 'dist/prod/*.html',
    imageSrc: 'src/assets/*@3x.{png,jpg}',
    imageDest: 'dist/prod/assets',
    buildHtmlSrc: 'src/*.html',
    buildHtmlDest: 'dist/prod',
    watchHtml: ['src/*.html', 'config/data.js']
  }
};

function delHtml() {
  return del(paths[yargs.m].delHtml);
};

function minifyImage() {
  return gulp
    .src(paths[yargs.m].imageSrc)
    .pipe(plumber({ errorHandler(err) {
      return console.log(err);
    } }))
    .pipe(smushit({ verbose: yargs.verbose }))
    .pipe(gulp.dest(paths[yargs.m].imageDest));
}

function buildHtml() {
  var res = gulp
    .src(paths[yargs.m].buildHtmlSrc)
    .pipe(
        template({
            data: data[yargs.m]
        })
    )
    .pipe(postcss());

  if (yargs.m !== 'dev') {
    res = res.pipe(htmlsplit()).pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }));
  }
  return res.pipe(gulp.dest(paths[yargs.m].buildHtmlDest)).pipe(browserSync.reload({ stream: true }));
}

function server() {
  // server
  if (yargs.m == 'dev' || yargs.s) {
    browserSync.init({
      server: {
          baseDir: "./dist"
      },
      ui: {
          port: yargs.p + 1,
          weinre: {
              port: yargs.p + 2
          }
      },
      port: yargs.p,
      startPath: yargs.m + '/index.html'
    });
    // watch
    if (yargs.m === 'dev' || yargs.w) {
      return gulp.watch(paths[yargs.m].watchHtml, gulp.series(delHtml, buildHtml));
    }
    return Promise.resolve();
  }
  return Promise.resolve();
}

// TODO: watch自动压缩图片
function watchImage() {
  return gulp.watch(paths[yargs.m].imageSrc, minifyImage);
}

function watchHtml() {
  if (yargs.m === 'dev' || yargs.w) {
    return gulp.watch(paths[yargs.m].watchHtml, gulp.series(delHtml, buildHtml));
  }
  return Promise.resolve();
}

function publish() {
  if (yargs.m === 'dev') {
    console.log('dev环境不可发布');
    return Promise.resolve();
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'account',
      message: '请输入' + yargs.m + '站的账号: '
    },
    {
      type: 'password',
      name: 'password',
      message: '请输入' + yargs.m + '站的密码: '
    }
  ]).then(function(answer) {
    console.log(answer);
    login(answer.account, answer.password).then(function(res) {
      console.log(res);
      if (res.cookie) {
        cookie = res.cookie;
        return new Promise.resolve(cookie);
      } else {
        return inquirer.prompt({
          type: 'input',
          name: 'cookie',
          message: 'API登陆失败，请提供登陆成功的cookie：'
        }).then(function(answer) {
          return cookie = answer.cookie;
        });
      }
    }).then(function(cookie) {
      console.log(cookie);
      // 根据发布配置读取文件内容
      var { page } = require('./config/publish.js');
      var uploadQueue = [];
      page = page[yargs.m];

      page.forEach(function(item) {
        let content = readContentSync(item.name);
        if (content && content.error) {
          console.log(content);
        } else {
          uploadQueue.push(
            postPage({
              ...item,
              content: content
            }, { cookie, mode: yargs.m}).then(function(res) {
              console.log(res);
            })
          );
        }
      });

      Promise.all(uploadQueue).then(function(res) {
        Promise.resolve();
      }).catch(function(e) {
        Promise.reject(e);
      });
      
    })
  }).catch(function(e) {
    Promise.reject(e);
  })
}

var build = gulp.series(delHtml, buildHtml, server);

function uploadPage(opt) {
  var path = './dist' + yargs.m + opt.content;
  var isExitsPage = fs.existsSync(path);
  var content = fs.readFileSync(path, 'utf-8');
}

exports.delHtml = delHtml;
exports.minifyImage = minifyImage;
exports.build = build;
exports.server = server;
exports.default = build;
exports.publish = publish;
