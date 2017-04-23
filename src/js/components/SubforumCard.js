"use strict";
const React = require("react");
const Card_1 = require("material-ui/Card");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.showSubforum = this.showSubforum.bind(this);
    }
    showSubforum() {
        window.location.href = `/subforums/${this.props.id}`;
    }
    render() {
        return (React.createElement("div", { className: "subforum-card", onClick: this.showSubforum },
            React.createElement(Card_1.Card, null,
                React.createElement("div", { className: "subforum-header" },
                    React.createElement(Card_1.CardHeader, { title: this.props.name })),
                React.createElement("div", { className: "subforum-body" },
                    React.createElement(Card_1.CardText, null, this.props.description)))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=SubforumCard.js.map