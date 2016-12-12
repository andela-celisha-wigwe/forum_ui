'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Do the same for post and message

exports.default = {
  all: function all(post) {
    return _api2.default.get('/posts/' + post + '/messages');
  },
  view: function view(post, id) {
    return _api2.default.get('/posts/' + post + '/messages/' + id);
  },
  update: function update(post, id, messageUpdate) {
    return _api2.default.put('/posts/' + post + '/messages/' + id, messageUpdate);
  },
  del: function del(post, id) {
    return _api2.default.del('/posts/' + post + '/messages/' + id);
  },
  create: function create(post, newMessage) {
    return _api2.default.post('/posts/' + post + '/messages', newMessage);
  }
};