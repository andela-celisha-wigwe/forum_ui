'use strict'

import React from 'react'

import SubforumStore from '../stores/subforum_store'
import SubforumAction from '../actions/subforum_action'

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subforums: []
    }

    // this.setState({
    //   subforums: []
    // })
  }

  componentDidMount () {
    // this.setState({
    //   subforums: []
    // })
    this.unsubscribe = SubforumStore.listen(this.onSubforums)
    SubforumAction.listSubforums()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onSubforums (subforums) {
    this.setState({
      subforums
    })
  }

  render () {
    console.log(this.state, this)
    return (<div>{ JSON.stringify(this.state.subforums )}</div>)
  }
}
