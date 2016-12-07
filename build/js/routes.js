'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouter = require('react-router');

var _App = require('./controllers/App');

var _App2 = _interopRequireDefault(_App);

var _HomePage = require('./controllers/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _SubforumPage = require('./controllers/SubforumPage');

var _SubforumPage2 = _interopRequireDefault(_SubforumPage);

var _PostPage = require('./controllers/PostPage');

var _PostPage2 = _interopRequireDefault(_PostPage);

var _NoMatch = require('./controllers/NoMatch');

var _NoMatch2 = _interopRequireDefault(_NoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default =
// Write the routes
_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/subforum/:subforum', component: _SubforumPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/subforum/:subforum/post/:post', component: _PostPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
  )
);