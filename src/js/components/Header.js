'use strict'

import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import UserStore from '../stores/user_store'
import UserAction from '../actions/user_action'
import ButtonComponent from './Button'

export default class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			authUser: {},
			showLogout: false
		}

		this.onShowLogout = this.onShowLogout.bind(this)
		this.onAuthUser = this.onAuthUser.bind(this)
		
	}

	componentDidMount() {
		this.unusubscribe = UserStore.listen(this.onAuthUser)
		UserAction.checkLogin()
	}

	componentWillUnmount() {
		this.unusubscribe()
	}

	onAuthUser (authUser) {
		this.setState({
			authUser
		})
	}

	onShowLogout () {
		this.setState({
			showLogout: !this.state.showLogout
		})
	}

	handleLogout () {
		UserAction.userLogout()
	}

	render () {
		const logout = this.state.showLogout ? (<span><ButtonComponent onClick={this.handleLogout} label="Logout" /></span>) : ""
		const right = this.state.authUser.username ? (
			<div>
				<p onClick={this.onShowLogout}>
					<span><ButtonComponent label={ this.state.authUser.username } /></span>
				</p>
				{ logout }
			</div>
		) : (
			<p>
				<Link to="login">
					<ButtonComponent label="Login" />
				</Link>
				<Link to="/register">
					<ButtonComponent label="Register" />
				</Link>
			</p>
		)
		return (
			<AppBar
			title="Home"
    		iconElementRight={ right }
			/>
		)
	}

}
