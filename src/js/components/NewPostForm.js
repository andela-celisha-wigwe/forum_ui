'use strict'

import React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../actions/alert_action'
import ButtonComponent from './Button'
import PostAction from '../actions/post_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: false,
			// body: "",
			// title: "hi"
		}
		this.handleNewPost = this.handleNewPost.bind(this)
		this.postDataIsValid = this.postDataIsValid.bind(this)
		// this.handleBody = this.handleBody.bind(this)
		// this.handleTitle = this.handleTitle.bind(this)
	}

	postDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6)
	}

	handleNewPost () {
		this.setState({
			error: true,
		})
		const title = this.refs.title.input.refs.input.value.trim()
		const body = this.refs.body.input.refs.input.value.trim()

		PostAction.createPost(this.props.subforumId, {title, body})
		this.trigger
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