'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _post_action = require('./post_action');

var _post_action2 = _interopRequireDefault(_post_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  init: function init() {
    this.listenTo(_post_action2.default.postRequest, this.onPostRequest);
  },
  onPostRequest: function onPostRequest(post) {
    this.trigger(post);
  }
});