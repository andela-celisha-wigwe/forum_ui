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

	handleLogout: () => {
		this.setItem(this.key, "")
		// window.localStorage.clear()
		this.trigger(false)
	},

	checkLogin: () => {
		return JSON.parse(this.getItem(this.key)) || false
	},

	setItem: (key, value) => {
		window.localStorage.setItem(key, value)
	},

	getItem: (key) => {
		window.localStorage.getItem(key)
	},

	// getAuthUser: () => {
	// 	return window.localStorage.getItem(this.key)
	// },

	// storeAuthUser: (userJSON) => {
	// 	this.setItem(this.key, userJSON)
	// },

	showError: () => {
		console.log("there was a problem")
		const errorMessages = JSON.parse(err.text).join("\n")
		AlertAction.alertError(errorMessages)
	}
}