'use strict'

import React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../actions/user_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			// username: '',
			// password: '',
			error: false
		}
		this.handleLogin = this.handleLogin.bind(this)
		this.loginDataIsValid = this.loginDataIsValid.bind(this)
	}

	loginDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6)
	}

	handleLogin () {
		this.setState({
			error: false
		})

		const username = this.refs.username.input.value.trim()
		const password = this.refs.password.input.value.trim()
		UserAction.userLogin({username, password})
	}

	render () {
		return (
			<div className="loginForm">
				<div className="inputField">
					<TextField hintText="username" ref="username"  value={this.state.username} name="username" />
				</div>
				<div className="inputField">
					<TextField type="password" hintText="password" ref="password"  value={this.state.password} name="password" />
				</div>
				<ButtonComponent label="Login" onClick={this.handleLogin} />
			</div>
		)
	}
}