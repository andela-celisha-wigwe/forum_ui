'use strict'

import React from 'react'

import AlertAction from '../actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../actions/user_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: 'mmmmmmmm',
			password: 'pppppppp',
			error: false
		}
		this.handleLogin = this.handleLogin.bind(this)
		this.loginDataIsValid = this.loginDataIsValid.bind(this)
		this.setUsername = this.setUsername.bind(this)
		this.setPassword = this.setPassword.bind(this)
	}

	setUsername () {
		this.setState({
			username: this.refs.username.value.trim()
		})
	}

	setPassword () {
		this.setState({
			password: this.refs.password.value.trim()
		})
	}

	loginDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6)
	}

	handleLogin () {
		if (! this.loginDataIsValid()) {
			this.setState({
				error: true
			})
			AlertAction.alertError("there was an error")
			return
		}
		this.setState({
			error: false
		})
		const { username, password } = this.state
		UserAction.userLogin({username, password})
	}

	render () {
		return (
			<div>
				<input type="text" ref="username" value={this.state.username} name="username" placeholder="username" onChange={ this.setUsername } />
				<input type="password" ref="password" value={this.state.password} name="password" placeholder="password" onChange={ this.setPassword } />
				
				<ButtonComponent label="Login" onClick={this.handleLogin} />
			</div>
		)
	}
}