'use strict'

import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import MessageAction from '../../shared/actions/message_action'
import MessageStore from '../../shared/stores/message_store'
import MessageCard from './MessageCard'
import NewMessageForm from './NewMessageForm'

import PostStore from '../../shared/stores/post_store'
import PostAction from '../../shared/actions/post_action'

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			messages: [],
			post: {},
			subforum: ""
		}
		this.onMessages = this.onMessages.bind(this)
	}

	componentDidMount () {
		this.unsubscribeMessages = MessageStore.listen(this.onMessages)
		this.unsubscribePost = PostStore.listen(this.onPost)

		MessageAction.listMessages(this.props.params.id)
		// PostAction.viewPost(this.props.params.id)
	}

	componentWillUnmount () {
		this.unsubscribeMessages()
		this.unsubscribePost()
	}

	onMessages (messages) {
		if (messages.constructor != Array) {
			messages = [messages].concat(this.state.messages)
		}
		this.setState({
			messages
		})
	}

	onPost (post) {
		this.setState({
			post
		})
	}

	render () {
		const messageList = this.state.messages.map((message) =>
			(<MessageCard at={message.created_at} body={message.body} key={message._id["$oid"]} id={message._id["$oid"]} />)
		)
		return (
			<div>
					<div className="post-container">
						<div className="post-top-section">
							<div className="single-post-header">
								<CardHeader title={this.state.post.title}/>
							</div>
							<div className="new-message-container">
								<NewMessageForm postId={this.props.params.id} />
							</div>
						</div>
						<div className={`messages-cards-container`}>
							{ messageList }
						</div>
					</div>
			</div>
		)
	}
}