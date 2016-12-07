'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _subforum_action = require('./subforum_action');

var _subforum_action2 = _interopRequireDefault(_subforum_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  // On creation
  init: function init() {
    this.listenTo(_subforum_action2.default.messageRequest, this.onSubforumRequest);
  },
  onSubforumRequest: function onSubforumRequest(subforum) {
    this.trigger(subforum);
  }
});