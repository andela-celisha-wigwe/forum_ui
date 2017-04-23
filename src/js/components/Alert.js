'use strict';
const React = require("react");
const material_ui_1 = require("material-ui");
const alert_store_1 = require("../../shared/stores/alert_store");
class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
        this.onAlertRequest = this.onAlertRequest.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.state = {
            text: '',
            show: false // change to false
        };
    }
    onAlertRequest(text) {
        if (!text)
            return;
        this.setState({ text, show: true });
        setTimeout(this.hide, this.props.timeout);
    }
    hide() {
        this.setState({ show: false });
    }
    componentDidMount() {
        this.unsubscribe = alert_store_1.default.listen(this.onAlertRequest, this);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleRequestClose() {
        this.setState({
            show: false
        });
    }
    render() {
        // const hideClass = this.state.show ? '' : 'hide'
        return (React.createElement(material_ui_1.Snackbar, { open: this.state.show, style: { bottom: "auto", backgroundColor: "red" }, bodyStyle: { backgroundColor: "red" }, message: this.state.text, autoHideDuration: 60000, onRequestClose: this.handleRequestClose }));
    }
}
exports.Alert = Alert;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Alert;
//# sourceMappingURL=Alert.js.map