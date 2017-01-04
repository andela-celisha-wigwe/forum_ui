'use strict'

import React from 'react'
import MessageAction from '../actions/message_action'
import MessageStore from '../stores/message_store'
import MessageCard from './MessageCard'

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			messages: []
		}
		this.onMessages = this.onMessages.bind(this)
	}

	componentDidMount () {
		this.unsubscribe = MessageStore.listen(this.onMessages)
		// console.log(this.props.params.id)
		MessageAction.listMessages(this.props.params.id)
	}

	componentWillUnmount () {
		this.unsubscribe()
	}

	onMessages (messages) {
		this.setState({
			messages
		})
	}

	render () {
		const messageList = this.state.messages.map((message) =>
			(<MessageCard body={message.body} key={message._id["$oid"]} id={message._id["$oid"]} />)
		)
		return (
			<div>{ messageList }</div>
		)
	}
}