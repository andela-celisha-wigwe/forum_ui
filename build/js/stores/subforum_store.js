'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subforum = require('../utils/subforum');

var _subforum2 = _interopRequireDefault(_subforum);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _subforum_action = require('../actions/subforum_action');

var _subforum_action2 = _interopRequireDefault(_subforum_action);

var _alert_action = require('../actions/alert_action');

var _alert_action2 = _interopRequireDefault(_alert_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  // On creation
  init: function init() {
    this.listenTo(_subforum_action2.default.listSubforums, this.onListSubforums);
    this.listenTo(_subforum_action2.default.viewSubforum, this.onViewSubforum);
    this.listenTo(_subforum_action2.default.updateSubforum, this.onUpdateSubforum);
    this.listenTo(_subforum_action2.default.createSubforum, this.onCreateSubforum);
    this.listenTo(_subforum_action2.default.deleteSubforum, this.onDeleteSubforum);
  },
  onListSubforums: function onListSubforums() {
    var _this = this;

    _subforum2.default.all().then(function (subforums) {
      _this.trigger(subforums);
    }).catch(this.showError);
  },
  onViewSubforum: function onViewSubforum(subforumId) {
    var _this2 = this;

    _subforum2.default.view(subforumId).then(function (subforum) {
      _this2.trigger(subforum);
    }).catch(this.showError);
  },
  onUpdateSubforum: function onUpdateSubforum(subforumId, subforumUpdate) {
    var _this3 = this;

    _subforum2.default.update(subforumId, subforumUpdate).then(function (subforum) {
      _this3.trigger(subforum);
    }).catch(this.showError);
  },
  onCreateSubforum: function onCreateSubforum(newSubforum) {
    var _this4 = this;

    _subforum2.default.create(newSubforum).then(function (subforum) {
      _this4.trigger(subforum);
    }).catch(this.showError);
  },
  onDeleteSubforum: function onDeleteSubforum(subforumId) {
    var _this5 = this;

    _subforum2.default.del(subforumId).then(function () {
      _this5.trigger(true);
    }).catch(this.showError);
  },
  showError: function showError(err) {
    _alert_action2.default.alertError('There was a problem. ' + err);
  }
});