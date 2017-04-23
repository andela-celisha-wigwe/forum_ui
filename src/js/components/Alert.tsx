'use strict'

import * as React from 'react'
import { Snackbar } from 'material-ui'

import AlertStore from '../../shared/stores/alert_store'

export interface AlertProperties {
  timeout: number
}

export interface AlertState {
  text: string,
  show: boolean
}

export class Alert extends React.Component<AlertProperties, AlertState> {

  unsubscribe: Function

  constructor (props: AlertProperties) {
    super(props)

    this.hide = this.hide.bind(this)
    this.onAlertRequest = this.onAlertRequest.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)

    this.state = {
      text: '',
      show: false // change to false
    }
  }

  onAlertRequest (text: string) {
    if (!text) return
    this.setState({ text, show: true })
    setTimeout(this.hide, this.props.timeout)
  }

  hide () {
    this.setState({ show: false })
  }

  componentDidMount () {
    this.unsubscribe = AlertStore.listen(this.onAlertRequest, this)
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
        style={{ bottom: "auto", backgroundColor: "red" }}
        bodyStyle={{ backgroundColor: "red" }}
        message={this.state.text}
        autoHideDuration={60000}
        onRequestClose={this.handleRequestClose}
        />
    )
  }
}

export default Alert
