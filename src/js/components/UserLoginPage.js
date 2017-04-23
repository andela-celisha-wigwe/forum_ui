'use strict';
const React = require("react");
const TextField_1 = require("material-ui/TextField");
const Button_1 = require("./Button");
const user_action_1 = require("../../shared/actions/user_action");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        };
        this.onUsername = this.onUsername.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.loginDataIsValid = this.loginDataIsValid.bind(this);
    }
    loginDataIsValid() {
        return (this.state.username.length >= 8) && (this.state.password.length >= 6);
    }
    onUsername(evt) {
        const value = evt.target.value;
        this.setState({
            username: value
        });
    }
    onPassword(evt) {
        const value = evt.target.value;
        this.setState({
            password: value
        });
    }
    handleLogin() {
        this.setState({
            error: false
        });
        // const username = this.refs.username.input.value.trim()
        // const password = this.refs.password.input.value.trim()
        const { username, password } = this.state;
        user_action_1.default.userLogin({ username, password });
    }
    render() {
        return (React.createElement("div", { className: "loginForm" },
            React.createElement("div", { className: "inputField" },
                React.createElement(TextField_1.default, { hintText: "username", onChange: this.onUsername, ref: "username", type: "text", value: this.state.username, name: "username" })),
            React.createElement("div", { className: "inputField" },
                React.createElement(TextField_1.default, { hintText: "password", onChange: this.onPassword, ref: "password", type: "password", value: this.state.password, name: "password" })),
            React.createElement(Button_1.default, { label: "Login", onClick: this.handleLogin })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=UserLoginPage.js.map