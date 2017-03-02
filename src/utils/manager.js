import React from 'react'
import AlertAction from '../shared/actions/alert_action'

export default {
	key: 'currentUser',

	getHeaders () {
		return this.getItem(this.key)
		? { Authorization: `Token ${JSON.parse(window.localStorage.getItem('currentUser')).auth_token}` }
		: {}
	},

	handleLogin (value) {
		this.setItem(this.key, JSON.stringify(value))
		this.trigger(value)
	},

	handleLogout () {
		this.setItem(this.key, "")
		// window.localStorage.clear()
		this.trigger(false)
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
		window.localStorage.getItem(key)
	},

	// getAuthUser: () => {
	// 	return window.localStorage.getItem(this.key)
	// },

	// storeAuthUser: (userJSON) => {
	// 	this.setItem(this.key, userJSON)
	// },

	showError (err) {
		console.log("there was a problem")
		AlertAction.alertError(err.toString())
	}
}