'use strict'

import React from 'react'

// import MessageAction from '../actions/message_action'
import MessageStore from '../stores/message_store'
import Snackbar from 'material-ui/Snackbar'

export class Message extends React.Component {
  constructor (props) {
    super(props)

    this.hide = this.hide.bind(this)
    this.onMessageRequest = this.onMessageRequest.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)

    this.state = {
      text: '',
      show: false
    }
  }

  onMessageRequest (text) {
    if (!text) return
    this.setState({ text, show: true })
    setTimeout(this.hide, this.props.timeout)
  }

  hide () {
    this.setState({ show: false })
  }

  componentDidMount () {
    this.unsubscribe = MessageStore.listen(this.onMessageRequest)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleRequestClose () {
    this.setState({
      show: false
    })
  }

  render () {
    // const hideClass = this.state.show ? '' : 'hide'
    return (
      <Snackbar
        open={this.state.show}
        message={this.state.text}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
        />
    )
  }
}

Message.propTypes = {
  // propTypes here
}
Message.defaultProps = { timeout: 5000 }

export default Message
