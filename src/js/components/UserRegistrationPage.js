'use strict'

import React from 'react'

import AlertAction from '../actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../actions/user_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			password_confirmation: '',
			error: false
		}
		this.handleRegister = this.handleRegister.bind(this)
		this.registrationDataIsValid = this.registrationDataIsValid.bind(this)
		this.setUsername = this.setUsername.bind(this)
		this.setPassword = this.setPassword.bind(this)
		this.setConfirmation = this.setConfirmation.bind(this)
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

	setConfirmation () {
		this.setState({
			password_confirmation: this.refs.confirmation.value.trim()
		})
	}

	registrationDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6) && (this.state.password == this.state.password_confirmation)
	}

	handleRegister () {
		console.log(this.state)
		if (! this.registrationDataIsValid()) {
			this.setState({
				error: true
			})
			AlertAction.alertError("there was an error")
			return
		}
		const { username, password, password_confirmation } = this.state
		UserAction.userRegister({username, password, password_confirmation})
	}

	render () {
		return (
			<div>
				<input type="text" ref="username" value={this.state.username} name="username" placeholder="username" onChange={ this.setUsername } />
				<input type="password" ref="password" value={this.state.password} name="password" placeholder="password" onChange={ this.setPassword } />
				<input type="password" ref="confirmation" value={this.state.password_confirmation}  name="confirmation" placeholder="password again" onChange={ this.setConfirmation } />
				<ButtonComponent label="Register" onClick={this.handleRegister} />
			</div>
		)
	}
}