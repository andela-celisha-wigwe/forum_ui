'use strict'

import * as React from 'react'
import TextField from 'material-ui/TextField'

import ButtonComponent from './Button'
import MessageAction from '../../shared/actions/message_action'

export interface NewMessageFormProps {
	postId: string
}
export interface NewMessageFormState {
	body: string,
	error: boolean,
}

export default class extends React.Component <NewMessageFormProps, NewMessageFormState> {

	constructor(props: NewMessageFormProps) {
		super(props);

		this.state = {
			body: "",
			error: false,
		}
		this.onNewText = this.onNewText.bind(this)
		this.handleNewMessage = this.handleNewMessage.bind(this)
	}

	handleNewMessage () {
		this.setState({
			error: true,
		})

		console.log(this.state, "This state")
		const { body } = this.state

		MessageAction.createMessage(this.props.postId, { body })
		this.setState({
			body: ""
		})
	}

	onNewText(evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value;
		// Readup this link for reference
		// http://stackoverflow.com/questions/33256274/typesafe-select-onchange-event-using-reactjs-and-typescript
		this.setState({
			body : value
		})
	}

	render () {
		return (
			<div className="new-message">
				<div className="form-caption"></div>
				<div className="new-message-body">
					<div className="field-label"></div>
					<TextField
						onChange={this.onNewText}
						ref="body"
						hintText="body"
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