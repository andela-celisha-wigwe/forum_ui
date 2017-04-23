'use strict';
const React = require("react");
const subforum_store_1 = require("../../shared/stores/subforum_store");
const subforum_action_1 = require("../../shared/actions/subforum_action");
const SubforumCard_1 = require("./SubforumCard");
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subforums: []
        };
        this.onSubforums = this.onSubforums.bind(this);
        // this.setState({
        //   subforums: []
        // })
    }
    componentDidMount() {
        this.unsubscribe = subforum_store_1.default.listen(this.onSubforums, this);
        subforum_action_1.default.listSubforums();
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onSubforums(subforums) {
        this.setState({
            subforums
        });
    }
    render() {
        const subforumList = this.state.subforums.map((subforum) => (React.createElement(SubforumCard_1.default, { name: subforum.name, key: subforum._id["$oid"], description: subforum.description, id: subforum._id["$oid"] })));
        return (React.createElement("div", { className: "subforum-cards-container" }, subforumList));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map