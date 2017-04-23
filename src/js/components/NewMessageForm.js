'use strict';
const React = require("react");
const TextField_1 = require("material-ui/TextField");
const Button_1 = require("./Button");
const message_action_1 = require("../../shared/actions/message_action");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            error: false,
        };
        this.onNewText = this.onNewText.bind(this);
        this.handleNewMessage = this.handleNewMessage.bind(this);
    }
    handleNewMessage() {
        this.setState({
            error: true,
        });
        // const body = this.refs["body"].refs.input.refs.input.value.trim()
        message_action_1.default.createMessage(this.props.postId, this.state.messageBody);
        this.setState({});
    }
    onNewText(evt) {
        const value = evt.target.value;
        console.log(value, "this value");
        // Readup this link for reference
        // http://stackoverflow.com/questions/33256274/typesafe-select-onchange-event-using-reactjs-and-typescript
        this.setState({
            body: value
        });
    }
    render() {
        return (React.createElement("div", { className: "new-message" },
            React.createElement("div", { className: "form-caption" }),
            React.createElement("div", { className: "new-message-body" },
                React.createElement("div", { className: "field-label" }),
                React.createElement(TextField_1.default, { onChange: this.onNewText, ref: "body", hintText: "body", value: this.state.body, name: "body", multiLine: true, rows: 2, rowsMax: 6 })),
            React.createElement(Button_1.default, { className: "form-button new-message-button", label: "Post", onClick: this.handleNewMessage })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=NewMessageForm.js.map