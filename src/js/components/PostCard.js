'use strict';
const React = require("react");
const Card_1 = require("material-ui/Card");
const FlatButton_1 = require("material-ui/FlatButton");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.showPost = this.showPost.bind(this);
    }
    showPost() {
        window.location.href = `/posts/${this.props.id}`;
    }
    render() {
        return (React.createElement("div", { className: "post-card" },
            React.createElement(Card_1.Card, null,
                React.createElement(Card_1.CardHeader, { title: this.props.title, className: "post-header" }),
                React.createElement(Card_1.CardText, { className: "post-body" },
                    this.props.body,
                    React.createElement(Card_1.CardActions, { className: "actions-bar" },
                        React.createElement(FlatButton_1.default, { label: "follow", onClick: this.showPost }))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=PostCard.js.map