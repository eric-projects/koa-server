const _path = require('path');
var ncp = require('ncp').ncp;
var fs = require('fs');

const checkMove = function(cover, path, callback) {
  const dir = path || _path.join(__dirname, '../../') + 'server';
  if (cover) {
    return callback(dir);
  } else {
    fs.exists(dir, function(exists) {
      if (!exists) {
        return callback(dir);
      } else {
        console.warn('[@eric/koa] file already exists! ');
      }
    });
  }
};

const moveFiles = function(targetDir) {
  ncp.limit = 16;
  ncp(__dirname + '/lib/', targetDir, function(err) {
    if (err) {
      return console.error('[@eric/koa] ' + err);
    }
    console.log('[@eric/koa] files done!');
  });

  ncp(__dirname + '/package.json', targetDir + '/package.json', function(err) {
    if (err) {
      return console.error('[@eric/koa] ' + err);
    }
    console.log('[@eric/koa] package.json done!');
  });
};

/**
 * cover 是否覆盖文件
 * path 默认server路径
 */
exports.init = function(cover = false, path = '') {
  checkMove(cover, path, function(dir) {
    if (dir) moveFiles(dir);
  });
};
