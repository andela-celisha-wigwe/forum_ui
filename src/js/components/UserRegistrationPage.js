'use strict';
const React = require("react");
const TextField_1 = require("material-ui/TextField");
const alert_action_1 = require("../../shared/actions/alert_action");
const Button_1 = require("./Button");
const user_action_1 = require("../../shared/actions/user_action");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            error: false
        };
        this.handleRegister = this.handleRegister.bind(this);
        this.registrationDataIsValid = this.registrationDataIsValid.bind(this);
        this.onUsername = this.onUsername.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);
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
    onConfirmation(evt) {
        const value = evt.target.value;
        this.setState({
            password_confirmation: value
        });
    }
    registrationDataIsValid() {
        return (this.state.username.length >= 8) && (this.state.password.length >= 6) && (this.state.password == this.state.password_confirmation);
    }
    handleRegister() {
        if (!this.registrationDataIsValid()) {
            this.setState({
                error: true
            });
            alert_action_1.default.alertError("there was an error");
            return;
        }
        const { username, password, password_confirmation } = this.state;
        user_action_1.default.userRegister({ username, password, password_confirmation });
    }
    render() {
        return (React.createElement("div", { className: "registrationForm" },
            React.createElement("div", { className: "inputField" },
                React.createElement(TextField_1.default, { hintText: "username", ref: "username", name: "username", onChange: this.onUsername })),
            React.createElement("div", { className: "inputField" },
                React.createElement(TextField_1.default, { type: "password", hintText: "password", ref: "password", value: this.state.password, name: "password", onChange: this.onPassword })),
            React.createElement("div", { className: "inputField" },
                React.createElement(TextField_1.default, { type: "password", hintText: "password confirmation", ref: "confirmation", value: this.state.password_confirmation, name: "confirmation", onChange: this.onConfirmation })),
            React.createElement(Button_1.default, { label: "Register", onClick: this.handleRegister })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=UserRegistrationPage.js.map