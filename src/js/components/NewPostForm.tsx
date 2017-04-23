'use strict'

import * as React from 'react'
import TextField from 'material-ui/TextField'

import ButtonComponent from './Button'
import PostAction from '../../shared/actions/post_action'

export interface NewPostFormProps {
	subforumId: string
}

export interface NewPostFormState {
	error: boolean,
	username: string,
	password: string,
	body: string,
	title: string
}

export default class extends React.Component <NewPostFormProps, NewPostFormState> {

	constructor(props: NewPostFormProps) {
		super(props);

		this.state = {
			error: false,
			username: "",
			password: "",
			body: "",
			title: ""
		}
		this.handleNewPost = this.handleNewPost.bind(this)
		this.postDataIsValid = this.postDataIsValid.bind(this)
		this.onNewBody = this.onNewBody.bind(this)
		this.onNewTitle = this.onNewTitle.bind(this)
	}

	postDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6)
	}

	handleNewPost () {
		this.setState({
			error: true,
		})

		const { body, title } = this.state

		PostAction.createPost(this.props.subforumId, {body, title})
	}

	onNewTitle (evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value
		this.setState({
			title: value
		})

	}

	onNewBody (evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value
		this.setState({
			body: value
		})
	}

	render () {
		return (
			<div className="new-post">
				<div className="form-caption">
					Create a new post
				</div>
				<div className="new-post-title">
					<div className="field-label">
						Title:
					</div>
					<TextField
						onChange={this.onNewTitle}
						ref="title"
						hintText="title"
						value={this.state.title} name="title"
						multiLine={true}
						rows={5}
						rowsMax={10}
						/>
				</div>
				<div className="new-post-body">
					<div className="field-label">
						Body:
					</div>
					<TextField
						onChange={this.onNewBody}
						ref="body"
						hintText="body"
						value={this.state.body} name="body"
						multiLine={true}
						rows={10}
						rowsMax={15}
						/>
				</div>
				<ButtonComponent label="Post" onClick={this.handleNewPost} />
			</div>
		)
	}
}