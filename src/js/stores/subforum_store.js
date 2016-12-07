'use strict'

import Reflux from 'reflux'

import SubforumAction from './subforum_action'

export default Reflux.createStore({
  // On creation
  init () {
    this.listenTo(SubforumAction.messageRequest, this.onSubforumRequest)
  },

  onSubforumRequest (subforum) {
    this.trigger(subforum)
  }
})
