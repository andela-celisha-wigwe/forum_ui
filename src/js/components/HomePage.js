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
		this.onSubforums = this.onSubforums.bind(this)

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
    return (<div>{ JSON.stringify(this.state.subforums )}</div>)
  }
}
