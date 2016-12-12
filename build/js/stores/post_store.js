'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _post = require('../utils/post');

var _post2 = _interopRequireDefault(_post);

var _post_action = require('../actions/post_action');

var _post_action2 = _interopRequireDefault(_post_action);

var _alert_action = require('../actions/alert_action');

var _alert_action2 = _interopRequireDefault(_alert_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reflux2.default.createStore({
  init: function init() {
    this.listenTo(_post_action2.default.listPosts, this.onListPosts);
    this.listenTo(_post_action2.default.viewPost, this.onViewPost);
    this.listenTo(_post_action2.default.createPost, this.onCreatePost);
    this.listenTo(_post_action2.default.updatePost, this.onUpdatePost);
    this.listenTo(_post_action2.default.deletePost, this.onDeletePost);
  },
  onListPosts: function onListPosts(subforum) {
    var _this = this;

    _post2.default.all(subforum).then(function (posts) {
      _this.trigger(posts);
    }).catch(this.showError);
  },
  onViewPost: function onViewPost(subforum, postId) {
    var _this2 = this;

    _post2.default.view(subforum, postId).then(function (post) {
      _this2.trigger(post);
    }).catch(this.showError);
  },
  onCreatePost: function onCreatePost(subforum, newPost) {
    var _this3 = this;

    _post2.default.create(subforum, newPost).then(function (post) {
      _this3.trigger(post);
    }).catch(this.showError);
  },
  onUpdatePost: function onUpdatePost(subforum, postId, postUpdate) {
    var _this4 = this;

    _post2.default.update(subforum, postId, postUpdate).then(function (post) {
      _this4.trigger(post);
    }).catch(this.showError);
  },
  onDeletePost: function onDeletePost(subforum, postId) {
    var _this5 = this;

    _post2.default.del(subforum, postId).then(function () {
      _this5.trigger(true);
    }).catch(this.showError);
  },
  showError: function showError(err) {
    _alert_action2.default.alertError('There was a problem. ' + err);
  }
});