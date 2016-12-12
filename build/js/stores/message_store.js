'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _message = require('../utils/message');

var _message2 = _interopRequireDefault(_message);

var _message_action = require('../actions/message_action');

var _message_action2 = _interopRequireDefault(_message_action);

var _alert_action = require('../actions/alert_action');

var _alert_action2 = _interopRequireDefault(_alert_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
	init: function init() {
		this.listenTo(_message_action2.default.listMessages, this.onListMessages);
		this.listenTo(_message_action2.default.viewMessage, this.onViewMessage);
		this.listenTo(_message_action2.default.createMessage, this.onCreateMessage);
		this.listenTo(_message_action2.default.updateMessage, this.onUpdateMessage);
		this.listenTo(_message_action2.default.deleteMessage, this.onDeleteMessage);
	},
	onListMessages: function onListMessages(post) {
		var _this = this;

		_message2.default.all(post).then(function (messages) {
			_this.trigger(messages);
		}).catch(this.showError);
	},
	onViewMessage: function onViewMessage(post, messageId) {
		var _this2 = this;

		_message2.default.view(post, messageId).then(function (message) {
			_this2.trigger(message);
		}).catch(this.showError);
	},
	onCreateMessage: function onCreateMessage(post, newMessage) {
		var _this3 = this;

		_message2.default.create(post, newMessage).then(function (message) {
			_this3.trigger(message);
		}).catch(this.showError);
	},
	onUpdateMessage: function onUpdateMessage(post, messageId, messageUpdate) {
		var _this4 = this;

		_message2.default.update(post, messageId, messageUpdate).then(function (message) {
			_this4.trigger(message);
		}).catch(this.showError);
	},
	onDeleteMessage: function onDeleteMessage(post, messageId) {
		var _this5 = this;

		_message2.default.update(post, messageId).then(function () {
			_this5.trigger(true);
		}).catch(this.showError);
	},
	showError: function showError(err) {
		_alert_action2.default.alertError('There was a problem. ' + err);
	}
});