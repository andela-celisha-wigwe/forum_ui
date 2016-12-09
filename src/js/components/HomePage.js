'use strict'

import React from 'react'

import SubforumStore from '../stores/subforum_store'
import SubforumAction from '../actions/subforum_action'

export default class HomePage extends React.Component {
	constructor (props) {
		super(props)
		
	}

	componentDidMount () {
		this.unsubscribe = SubforumStore.listen(this.onSubforums)
		SubforumAction.listSubforums()
	}

	componentWillUnmount () {
		this.unsubscribe()
	}

	onSubforums(subforums) {
		this.setState({
			subforums
		})
	}
}