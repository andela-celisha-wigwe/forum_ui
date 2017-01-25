'use strict'

import React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../actions/alert_action'
import ButtonComponent from './Button'
import MessageAction from '../actions/message_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: false,
		}
		this.handleNewMessage = this.handleNewMessage.bind(this)
	}

	handleNewMessage () {
		this.setState({
			error: true,
		})
		const body = this.refs.body.input.refs.input.value.trim()

		MessageAction.createMessage(this.props.postId, {body})
		this.setState({
			// body: ""
		})
	}

	render () {
		return (
			<div className="new-message">
				<div className="form-caption"></div>
				<div className="new-message-body">
					<div className="field-label"></div>
					<TextField
						ref="body"
						hintText="body"
						placeholder="Add a repsonse"
						value={this.state.body} name="body"
						multiLine={true}
						rows={2}
						rowsMax={6}
						/>
				</div>
				<ButtonComponent className="form-button new-message-button" label="Post" onClick={this.handleNewMessage} />
			</div>
		)
	}
}