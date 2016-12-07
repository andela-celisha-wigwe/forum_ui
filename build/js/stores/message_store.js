'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _message_action = require('./message_action');

var _message_action2 = _interopRequireDefault(_message_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  // On creation
  init: function init() {
    // List for every messageRequestion action
    // And fire onMessageRequest with the data of the action
    this.listenTo(_message_action2.default.messageRequest, this.onMessageRequest);
  },


  // Trigger all the listeners with the new message
  onMessageRequest: function onMessageRequest(message) {
    this.trigger(message);
  }
});