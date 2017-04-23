'use strict';
const React = require("react");
const react_router_1 = require("react-router");
const AppBar_1 = require("material-ui/AppBar");
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
const user_store_1 = require("../../shared/stores/user_store");
const user_action_1 = require("../../shared/actions/user_action");
const Button_1 = require("./Button");
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogout: false
        };
        this.onShowLogout = this.onShowLogout.bind(this);
        this.onAuthUser = this.onAuthUser.bind(this);
        this.goHomePage = this.goHomePage.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = user_store_1.default.listen(this.onAuthUser, this);
        user_action_1.default.checkLogin();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onAuthUser(authUser) {
        this.setState({
            authUser
        });
    }
    onShowLogout() {
        this.setState({
            showLogout: !this.state.showLogout
        });
    }
    goHomePage() {
        console.log('onTouchTap triggered on the title component');
        window.location.href = "/";
    }
    handleLogout() {
        user_action_1.default.userLogout();
    }
    render() {
        const logout = this.state.showLogout ? (React.createElement("span", null,
            React.createElement(Button_1.default, { onClick: this.handleLogout, label: "Logout" }))) : "";
        const right = this.state.authUser ? (React.createElement("div", null,
            React.createElement("p", { onClick: this.onShowLogout },
                React.createElement("span", null,
                    React.createElement(Button_1.default, { label: this.state.authUser.username }))),
            logout)) : (React.createElement("p", null,
            React.createElement(react_router_1.Link, { to: "login" },
                React.createElement(Button_1.default, { label: "Login" })),
            React.createElement(react_router_1.Link, { to: "/register" },
                React.createElement(Button_1.default, { label: "Register" }))));
        return (React.createElement(AppBar_1.default, { title: "Home", onTitleTouchTap: this.goHomePage, iconElementRight: right }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
//# sourceMappingURL=Header.js.map