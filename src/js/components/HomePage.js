'use strict'

import React from 'react'

import SubforumStore from '../../shared/stores/subforum_store'
import SubforumAction from '../../shared/actions/subforum_action'
import SubforumCard from './SubforumCard'

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
    const subforumList = this.state.subforums.map((subforum) => 
      (<SubforumCard name={subforum.name} key={subforum.id} description={subforum.description} id={subforum._id["$oid"]} />)
    )
    return (
      <div className="subforum-cards-container">{ subforumList }</div>
    )
  }
}
