'use strict'

import * as React from 'react'

import { default as SubforumStore, SubforumInterface } from '../../shared/stores/subforum_store'
import SubforumAction from '../../shared/actions/subforum_action'
import SubforumCard from './SubforumCard'

export interface HomePageProps {

}

export interface HomePageState {
  subforums: Array<SubforumInterface>
}

export default class HomePage extends React.Component<HomePageProps, HomePageState> {

  unsubscribe: Function

  constructor (props: HomePageProps) {
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
    this.unsubscribe = SubforumStore.listen(this.onSubforums, this)
    SubforumAction.listSubforums()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onSubforums (subforums: Array<SubforumInterface>) {
    this.setState({
      subforums
    })
  }

  render () {
    const subforumList = this.state.subforums.map((subforum: SubforumInterface) => 
      (<SubforumCard name={subforum.name} key={subforum._id["$oid"]} description={subforum.description} id={subforum._id["$oid"]} />)
    )
    return (
      <div className="subforum-cards-container">{ subforumList }</div>
    )
  }
}
