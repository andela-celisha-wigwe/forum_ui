'use strict'

import * as React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../../shared/actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../../shared/actions/user_action'

export interface UserRegistrationProps {

}

export interface UserRegistrationState {
	username: string,
	password: string,
	password_confirmation: string,
	error: boolean
}

export default class extends React.Component <UserRegistrationProps, UserRegistrationState> {

	constructor(props: UserRegistrationProps) {
		super(props);

		this.state = {
			username: '',
			password: '',
			password_confirmation: '',
			error: false
		}
		this.handleRegister = this.handleRegister.bind(this)
		this.registrationDataIsValid = this.registrationDataIsValid.bind(this)
		this.onUsername = this.onUsername.bind(this)
		this.onPassword = this.onPassword.bind(this)
		this.onConfirmation = this.onConfirmation.bind(this)
	}

	onUsername (evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value
		this.setState({
			username: value
		})
	}

	onPassword (evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value
		this.setState({
			password: value
		})
	}

	onConfirmation (evt: React.FormEvent<HTMLElement>) {
		const value: string = (evt.target as any).value
		this.setState({
			password_confirmation: value
		})
	}

	registrationDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6) && (this.state.password == this.state.password_confirmation)
	}

	handleRegister () {
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
			<div className="registrationForm">
				<div className="inputField">
					<TextField hintText="username" ref="username"  name="username"  onChange={ this.onUsername } />
				</div>
				<div className="inputField">
					<TextField type="password" hintText="password" ref="password"  value={this.state.password} name="password"  onChange={ this.onPassword } />
				</div>
				<div className="inputField">
					<TextField type="password" hintText="password confirmation" ref="confirmation"  value={this.state.password_confirmation} name="confirmation"  onChange={ this.onConfirmation } />
				</div>
				<ButtonComponent label="Register" onClick={this.handleRegister} />
			</div>
		)
	}
}