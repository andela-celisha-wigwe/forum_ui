'use strict';
const React = require("react");
const Moment = require("moment");
const Card_1 = require("material-ui/Card");
class default_1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(Card_1.Card, { className: "message-body" },
            React.createElement(Card_1.CardText, null,
                this.props.body,
                React.createElement("div", { className: "message-time" }, Moment(this.props.at, "YYYYMMDD").fromNow()))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=MessageCard.js.map