'use strict'

import * as React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import MessageAction from '../../shared/actions/message_action'
import { default as MessageStore, MessageInterface } from '../../shared/stores/message_store'
import MessageCard from './MessageCard'
import NewMessageForm from './NewMessageForm'

import { default as PostStore, PostInterface } from '../../shared/stores/post_store'
import PostAction from '../../shared/actions/post_action'

export interface PostPageProps {
	params: {
		id: string
	}
}

export interface PostPageState {
	messages: Array<MessageInterface>,
	post?: PostInterface
}

export default class extends React.Component <PostPageProps, PostPageState> {

	unsubscribePost: Function
	unsubscribeMessages: Function

	constructor (props: PostPageProps) {
		super(props)
		this.state = {
			messages: [],
			post: undefined,
		}
		this.onMessages = this.onMessages.bind(this)
	}

	componentDidMount () {
		this.unsubscribeMessages = MessageStore.listen(this.onMessages, this)
		this.unsubscribePost = PostStore.listen(this.onPost, this)

		MessageAction.listMessages(this.props.params.id)
		// PostAction.viewPost(this.props.params.id)
	}

	componentWillUnmount () {
		this.unsubscribeMessages()
		this.unsubscribePost()
	}

	onMessages (messages: Array<MessageInterface>) {
		console.log(messages, "messages")
		// messages.forEach((message, index) => {
		// 	this.state.messages.push(message)
		// })
		messages = messages.concat(this.state.messages) // here.
		this.setState({
			messages
		})
	}

	onPost (post: PostInterface) {
		this.setState({
			post
		})
	}

	render () {
		const messageList = this.state.messages.map((message: MessageInterface) =>
			(<MessageCard at={message.created_at} body={message.body} key={message._id["$oid"]} id={message._id["$oid"]} />)
		)
		const title = this.state.post ? this.state.post.title : ""
		return (
			<div>
					<div className="post-container">
						<div className="post-top-section">
							<div className="single-post-header">
								<CardHeader title={title}/>
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