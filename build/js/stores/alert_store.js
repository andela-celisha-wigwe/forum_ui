'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _alert_action = require('./alert_action');

var _alert_action2 = _interopRequireDefault(_alert_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  // On creation
  init: function init() {
    // List for every AlertRequestion action
    // And fire onAlertRequest with the data of the action
    this.listenTo(_alert_action2.default.alertRequest, this.onAlertRequest);
    this.listenTo(_alert_action2.default.alertError, this.onAlertError);
  },


  // Trigger all the listeners with the new alert
  onAlertRequest: function onAlertRequest(alert) {
    this.trigger(alert);
  },


  // Trigger all the listeners with the new alert
  onAlertError: function onAlertError(error) {
    this.trigger(error);
  }
});