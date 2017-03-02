'use strict'

import React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../../shared/actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../../shared/actions/user_action'

export default class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			// username: '',
			// password: '',
			// password_confirmation: '',
			error: false
		}
		this.handleRegister = this.handleRegister.bind(this)
		this.registrationDataIsValid = this.registrationDataIsValid.bind(this)
		// this.setUsername = this.setUsername.bind(this)
		// this.setPassword = this.setPassword.bind(this)
		// this.setConfirmation = this.setConfirmation.bind(this)
	}

	// setUsername () {
	// 	this.setState({
	// 		username: this.refs.username.value.trim()
	// 	})
	// }

	// setPassword () {
	// 	this.setState({
	// 		password: this.refs.password.value.trim()
	// 	})
	// }

	// setConfirmation () {
	// 	this.setState({
	// 		password_confirmation: this.refs.confirmation.value.trim()
	// 	})
	// }

	registrationDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6) && (this.state.password == this.state.password_confirmation)
	}

	handleRegister () {
		// if (! this.registrationDataIsValid()) {
		// 	this.setState({
		// 		error: true
		// 	})
		// 	AlertAction.alertError("there was an error")
		// 	return
		// }
		// const { username, password, password_confirmation } = this.state
		const username = this.refs.username.input.value
		const password = this.refs.password.input.value
		const password_confirmation = this.refs.confirmation.input.value

		UserAction.userRegister({username, password, password_confirmation})
	}

	render () {
		return (
			<div className="registrationForm">
				<div className="inputField">
					<TextField hintText="username" ref="username"  name="username"  onChange={ this.setUsername } />
				</div>
				<div className="inputField">
					<TextField type="password" hintText="password" ref="password"  value={this.state.password} name="password"  onChange={ this.setPassword } />
				</div>
				<div className="inputField">
					<TextField type="password" hintText="password confirmation" ref="confirmation"  value={this.state.password_confirmation} name="confirmation"  onChange={ this.setConfirmation } />
				</div>
				<ButtonComponent label="Register" onClick={this.handleRegister} />
			</div>
		)
	}
}