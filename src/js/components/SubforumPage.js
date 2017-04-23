'use strict';
const React = require("react");
const Card_1 = require("material-ui/Card");
const subforum_store_1 = require("../../shared/stores/subforum_store");
const subforum_action_1 = require("../../shared/actions/subforum_action");
const post_action_1 = require("../../shared/actions/post_action");
const post_store_1 = require("../../shared/stores/post_store");
const PostCard_1 = require("./PostCard");
const NewPostForm_1 = require("./NewPostForm");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            subforum: undefined,
            showForm: true
        };
        this.onPosts = this.onPosts.bind(this);
        this.onSubforum = this.onSubforum.bind(this);
        this.handleFormToggle = this.handleFormToggle.bind(this);
    }
    componentDidMount() {
        this.unsubscribePosts = post_store_1.default.listen(this.onPosts, this);
        this.unsubscribeSubforum = subforum_store_1.default.listen(this.onSubforum, this);
        post_action_1.default.listPosts(this.props.params.id);
        subforum_action_1.default.viewSubforum(this.props.params.id);
    }
    componentWillUnmount() {
        this.unsubscribePosts();
        this.unsubscribeSubforum();
    }
    handleFormToggle() {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    onSubforum(subforum) {
        this.setState({
            subforum
        });
    }
    onPosts(posts) {
        posts = posts.concat(this.state.posts);
        this.setState({
            posts
        });
    }
    render() {
        const formClass = this.state.showForm ? 'form-showing' : 'form-hiding';
        const postList = this.state.posts.map((post) => (React.createElement(PostCard_1.default, { body: post.body, key: post._id["$oid"], title: post.title, id: post._id["$oid"] })));
        const subforumName = this.state.subforum ? this.state.subforum.name : "";
        return (React.createElement("div", null,
            React.createElement(Card_1.Card, null,
                React.createElement("div", { className: "single-subforum-header subforum-header" },
                    React.createElement(Card_1.CardHeader, { title: subforumName }),
                    React.createElement("span", { onClick: this.handleFormToggle, className: "toggleForm" }, " \u00D7 ")),
                React.createElement("div", { className: "subforum-container" },
                    React.createElement("div", { className: `new-post-container ${formClass}` },
                        React.createElement(NewPostForm_1.default, { subforumId: this.props.params.id })),
                    React.createElement("div", { className: `posts-cards-container ${formClass}` }, postList)))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=SubforumPage.js.map