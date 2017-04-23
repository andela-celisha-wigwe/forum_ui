'use strict';
const React = require("react");
const Header_1 = require("./components/Header");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
// import { lightBaseTheme } from 'material-ui/styles'
// import * as injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// const lightMuiTheme = getMuiTheme(lightBaseTheme);
const Footer_1 = require("./components/Footer");
const Alert_1 = require("./components/Alert");
const button = {
    height: 30,
    minWidth: 100,
    iconButtonSize: 30,
    textTransform: "uppercase",
    textColor: "#ffffff",
    color: "#99bcdd",
    backgroundColor: "#ddcb99",
    margin: '0 10px'
};
const myTheme = getMuiTheme_1.default({
    palette: {
        textColor: '#333333',
        alternateTextColor: '#ffffff',
        primary1Color: '#30445C',
        primary2Color: '#ffffff',
        primary3Color: '#333333',
        accent1Color: '#4dcadd',
        disabledColor: '#f2f2f2',
    },
    button: button,
    flatButton: {
        // backgroundColor: 'rgb(136, 169, 208)',
        // color: '#ffffff',
        // margin: '0 10px'
        color: 'rgb(136, 169, 208)',
        textColor: '#ffffff',
    },
    fontFamily: 'Roboto'
});
class default_1 extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
   * Render current page
   */
    renderChildren() {
        return React.cloneElement(this.props.children, {});
    }
    render() {
        return (React.createElement(MuiThemeProvider_1.default, { muiTheme: myTheme },
            React.createElement("div", null,
                React.createElement("div", { className: "main-header" },
                    React.createElement(Header_1.default, null)),
                React.createElement(Alert_1.default, { timeout: 5000 }),
                React.createElement("div", { className: "main-body" }, this.renderChildren()),
                React.createElement(Footer_1.default, null))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=App.js.map