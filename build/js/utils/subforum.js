'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Do the same for post and message

exports.default = {
  all: function all() {
    return _api2.default.get('/subforums');
  },
  one: function one(id) {
    return _api2.default.get('/subforums/' + id);
  },
  edit: function edit(id, new_content) {
    return _api2.default.put('/subforums/' + id, new_content);
  },
  del: function del(id) {
    return _api2.default.del('/subforums/' + id);
  },
  create: function create(new_content) {
    return _api2.default.post('/subforums', new_content);
  }
};