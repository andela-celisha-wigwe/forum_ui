'use strict';
const React = require("react");
const Card_1 = require("material-ui/Card");
const message_action_1 = require("../../shared/actions/message_action");
const message_store_1 = require("../../shared/stores/message_store");
const MessageCard_1 = require("./MessageCard");
const NewMessageForm_1 = require("./NewMessageForm");
const post_store_1 = require("../../shared/stores/post_store");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            post: undefined,
        };
        this.onMessages = this.onMessages.bind(this);
    }
    componentDidMount() {
        this.unsubscribeMessages = message_store_1.default.listen(this.onMessages, this);
        this.unsubscribePost = post_store_1.default.listen(this.onPost, this);
        message_action_1.default.listMessages(this.props.params.id);
        // PostAction.viewPost(this.props.params.id)
    }
    componentWillUnmount() {
        this.unsubscribeMessages();
        this.unsubscribePost();
    }
    onMessages(messages) {
        messages = messages.concat(this.state.messages); // here.
        this.setState({
            messages
        });
    }
    onPost(post) {
        this.setState({
            post
        });
    }
    render() {
        const messageList = this.state.messages.map((message) => (React.createElement(MessageCard_1.default, { at: message.created_at, body: message.body, key: message._id["$oid"], id: message._id["$oid"] })));
        const title = this.state.post ? this.state.post.title : "";
        return (React.createElement("div", null,
            React.createElement("div", { className: "post-container" },
                React.createElement("div", { className: "post-top-section" },
                    React.createElement("div", { className: "single-post-header" },
                        React.createElement(Card_1.CardHeader, { title: title })),
                    React.createElement("div", { className: "new-message-container" },
                        React.createElement(NewMessageForm_1.default, { postId: this.props.params.id }))),
                React.createElement("div", { className: `messages-cards-container` }, messageList))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=PostPage.js.map