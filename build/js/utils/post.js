'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Do the same for post and message

exports.default = {
  all: function all(subforum) {
    return _api2.default.get('/subforums/' + subforum + '/posts');
  },
  one: function one(subforum, id) {
    return _api2.default.get('/subforums/' + subforum + '/posts/' + id);
  },
  edit: function edit(subforum, id, post_update) {
    return _api2.default.put('/subforums/' + subforum + '/posts/' + id, post_update);
  },
  del: function del(subforum, id) {
    return _api2.default.del('/subforums/' + subforum + '/posts/' + id);
  },
  create: function create(subforum, new_post) {
    return _api2.default.post('/subforums/' + subforum + '/posts', new_post);
  }
};