'use strict'

import Reflux from 'reflux'

import MessageAction from './message_action'

export default Reflux.createStore({
  init () {
    this.listenTo(MessageAction.messageRequest, this.onMessageRequest)
  },

  onMessageRequest (message) {
    this.trigger(message)
  }
})
