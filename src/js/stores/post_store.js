'use strict'

import Reflux from 'reflux'

import PostAction from './post_action'

export default Reflux.createStore({
  init () {
    this.listenTo(PostAction.postRequest, this.onPostRequest)
  },

  onPostRequest (post) {
    this.trigger(post)
  }
})
