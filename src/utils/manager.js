import React from 'react'
import AlertAction from '../shared/actions/alert_action'

export default {
	key: 'currentUser',

	getHeaders () {
		return this.getItem(this.key)
		? { Authorization: `Token ${JSON.parse(this.getItem('currentUser')).auth_token}` }
		: {}
	},

	handleLogin (value) {
		this.setItem(this.key, JSON.stringify(value))
	},

	handleLogout () {
		this.setItem(this.key, "")
		// window.localStorage.clear()
	},

	checkLogin () {
		try {
			return JSON.parse(this.getItem(this.key))
		} catch (err) {
			console.log(err)
			return false
		}
	},

	setItem (key, value) {
		window.localStorage.setItem(key, value)
	},

	getItem (key) {
		return window.localStorage.getItem(key)
	},

	showError (err) {
		console.log("there was a problem")
		AlertAction.alertError(err.toString())
	}
}