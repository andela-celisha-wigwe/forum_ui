'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _alert_store = require('../stores/alert_store');

var _alert_store2 = _interopRequireDefault(_alert_store);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import AlertAction from '../actions/alert_action'


var Alert = exports.Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.hide = _this.hide.bind(_this);
    _this.onAlertRequest = _this.onAlertRequest.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);

    _this.state = {
      text: '',
      show: false
    };
    return _this;
  }

  _createClass(Alert, [{
    key: 'onAlertRequest',
    value: function onAlertRequest(text) {
      if (!text) return;
      this.setState({ text: text, show: true });
      setTimeout(this.hide, this.props.timeout);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ show: false });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = _alert_store2.default.listen(this.onAlertRequest);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // const hideClass = this.state.show ? '' : 'hide'
      return _react2.default.createElement(_Snackbar2.default, {
        open: this.state.show,
        alert: this.state.text,
        autoHideDuration: 4000,
        onRequestClose: this.handleRequestClose
      });
    }
  }]);

  return Alert;
}(_react2.default.Component);

Alert.propTypes = {
  // propTypes here
};
Alert.defaultProps = { timeout: 5000 };

exports.default = Alert;