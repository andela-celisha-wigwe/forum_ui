'use strict'

import React from 'react'

// import AlertAction from '../actions/alert_action'
import AlertStore from '../stores/alert_store'
import Snackbar from 'material-ui/Snackbar'

export class Alert extends React.Component {
  constructor (props) {
    super(props)

    this.hide = this.hide.bind(this)
    this.onAlertRequest = this.onAlertRequest.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)

    this.state = {
      text: '',
      show: false
    }
  }

  onAlertRequest (text) {
    if (!text) return
    this.setState({ text, show: true })
    setTimeout(this.hide, this.props.timeout)
  }

  hide () {
    this.setState({ show: false })
  }

  componentDidMount () {
    this.unsubscribe = AlertStore.listen(this.onAlertRequest)
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

Alert.propTypes = {
  // propTypes here
}
Alert.defaultProps = { timeout: 5000 }

export default Alert
