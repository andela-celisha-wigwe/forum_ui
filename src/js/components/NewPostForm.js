'use strict';
const React = require("react");
const TextField_1 = require("material-ui/TextField");
const Button_1 = require("./Button");
const post_action_1 = require("../../shared/actions/post_action");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            username: "",
            password: "",
            body: "",
            title: ""
        };
        this.handleNewPost = this.handleNewPost.bind(this);
        this.postDataIsValid = this.postDataIsValid.bind(this);
        this.onNewBody = this.onNewBody.bind(this);
        this.onNewTitle = this.onNewTitle.bind(this);
    }
    postDataIsValid() {
        return (this.state.username.length >= 8) && (this.state.password.length >= 6);
    }
    handleNewPost() {
        this.setState({
            error: true,
        });
        const { body, title } = this.state;
        post_action_1.default.createPost(this.props.subforumId, { body, title });
    }
    onNewTitle(evt) {
        const value = evt.target.value;
        this.setState({
            title: value
        });
    }
    onNewBody(evt) {
        const value = evt.target.value;
        this.setState({
            body: value
        });
    }
    render() {
        return (React.createElement("div", { className: "new-post" },
            React.createElement("div", { className: "form-caption" }, "Create a new post"),
            React.createElement("div", { className: "new-post-title" },
                React.createElement("div", { className: "field-label" }, "Title:"),
                React.createElement(TextField_1.default, { onChange: this.onNewTitle, ref: "title", hintText: "title", value: this.state.title, name: "title", multiLine: true, rows: 5, rowsMax: 10 })),
            React.createElement("div", { className: "new-post-body" },
                React.createElement("div", { className: "field-label" }, "Body:"),
                React.createElement(TextField_1.default, { onChange: this.onNewBody, ref: "body", hintText: "body", value: this.state.body, name: "body", multiLine: true, rows: 10, rowsMax: 15 })),
            React.createElement(Button_1.default, { label: "Post", onClick: this.handleNewPost })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=NewPostForm.js.map