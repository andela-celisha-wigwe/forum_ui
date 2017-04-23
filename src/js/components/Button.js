'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const FlatButton_1 = require("material-ui/FlatButton");
const muiThemeable_1 = require("material-ui/styles/muiThemeable");
const buttonStyle = (props) => {
    return {
        backgroundColor: props.muiTheme.button.backgroundColor,
        color: props.muiTheme.palette.color,
        margin: props.muiTheme.palette.margin
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = muiThemeable_1.default()((props) => (React.createElement(FlatButton_1.default, __assign({}, props, { style: buttonStyle(props) }))));
//# sourceMappingURL=Button.js.map