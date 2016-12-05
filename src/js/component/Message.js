'use strict';

import React from 'react';

import MessageAction from '../actions/message_action';
import MessageStore from '../stores/message_store';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.onMessageRequest = this.onMessageRequest.bind(this)
    this.hide = this.hide.bind(this)

    this.state = {
      text: "",
      show: false
    };
  }
  
  onMessageRequest(text) {
    if (!text) return;
    this.setState({ text, show: true });
    setTimeout(this.hide, this.props.timeout)
  }
  
  hide() {
    this.setState({ show: false })
  }
  
  componentDidMount() {
    this.unsubscribe = MessageStore.listen(this.onMessageRequest);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const hideClass = this.state.show ? '' : 'hide';
    return (
      <div className={hideClass}>
        {this.state.text}
      </div>
    );
  }
}

Message.propTypes = propTypes;
Message.defaultProps = { timeout: 5000 };

export default Message