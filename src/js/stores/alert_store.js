'use strict'

import Reflux from 'reflux'

import AlertAction from './alert_action'

export default Reflux.createStore({
  // On creation
  init () {
    // List for every AlertRequestion action
    // And fire onAlertRequest with the data of the action
    this.listenTo(AlertAction.AlertRequest, this.onAlertRequest)
  },

  // Trigger all the listeners with the new alert
  onalertRequest (alert) {
    this.trigger(alert)
  }
})
