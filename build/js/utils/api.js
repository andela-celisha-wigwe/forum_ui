'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  root: 'localhost:3000',
  get: function get(path) {
    return this.wrapCall(_superagent2.default.get(this.root + path));
  },
  post: function post(path, data) {
    return this.wrapCall(_superagent2.default.post(this.root + path, data));
  },
  del: function del(path) {
    return this.wrapCall(_superagent2.default.del(this.root + path));
  },
  put: function put(path, data) {
    return this.wrapCall(_superagent2.default.put(this.root + path, data));
  },
  wrapCall: function wrapCall(req) {
    return new Promise(function (resolve, reject) {
      console.log(req.withCredentials(), "request");
      req.withCredentials().end(function (err, res) {
        if (res.statusCode >= 400 || err) {
          return reject(Object.assign(res, { err: err }));
        }
        resolve(res.body);
      });
    });
  }
};