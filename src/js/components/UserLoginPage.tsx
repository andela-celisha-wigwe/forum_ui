'use strict'

import * as React from 'react'
import TextField from 'material-ui/TextField'

import AlertAction from '../../shared/actions/alert_action'
import ButtonComponent from './Button'
import UserAction from '../../shared/actions/user_action'

export interface UserLoginProps {

}

export interface UserLoginState {
	username: string,
	password: string,
	error: boolean
}

export default class extends React.Component <UserLoginProps, UserLoginState> {

	constructor(props: UserLoginProps) {
		super(props);

		this.state = {
			username: '',
			password: '',
			error: false
		}
		this.onUsername = this.onUsername.bind(this)
		this.onPassword = this.onPassword.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
		this.loginDataIsValid = this.loginDataIsValid.bind(this)
	}

	loginDataIsValid () {
		return (this.state.username.length >= 8) && (this.state.password.length >= 6)
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

	handleLogin () {
		this.setState({
			error: false
		})

		// const username = this.refs.username.input.value.trim()
		// const password = this.refs.password.input.value.trim()

		const { username, password } = this.state

		UserAction.userLogin({username, password})
	}

	render () {
		return (
			<div className="loginForm">
				<div className="inputField">
					<TextField hintText="username" onChange={this.onUsername} ref="username" type="text" value={this.state.username} name="username" />
				</div>
				<div className="inputField">
					<TextField hintText="password" onChange={this.onPassword} ref="password" type="password"  value={this.state.password} name="password" />
				</div>
				<ButtonComponent label="Login" onClick={this.handleLogin} />
			</div>
		)
	}
}