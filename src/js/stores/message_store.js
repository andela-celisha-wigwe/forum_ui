'use strict';

import Reflux from 'reflux'

import MessageAction from './message_action'

export default Reflux.createStore({
  // On creation
  init () {
    // List for every messageRequestion action
    // And fire onMessageRequest with the data of the action
    this.listenTo(MessageAction.messageRequest, this.onMessageRequest);
  }
  
  // Trigger all the listeners with the new message
  onMessageRequest(message) {
    this.trigger(message);
  }
})