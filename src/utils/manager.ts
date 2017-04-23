import * as React from 'react'
import AlertAction from '../shared/actions/alert_action'
import { HeaderInterface } from '../shared/utils/api'

export default class {
	public static key: string = 'currentUser'

	public static getHeaders () : HeaderInterface {
		return this.getItem(this.key)
		? { Authorization: `Token ${JSON.parse(this.getItem('currentUser')).auth_token}` }
		: {}
	}

	public static handleLogin (value: Object) {
		this.setItem(this.key, JSON.stringify(value))
	}

	public static handleLogout () {
		this.setItem(this.key, "")
		// window.localStorage.clear()
	}

	public static checkLogin () : any {
		try {
			return JSON.parse(this.getItem(this.key))
		} catch (err) {
			console.log(err)
			return false
		}
	}

	public static setItem (key: string, value: any) {
		window.localStorage.setItem(key, value)
	}

	public static getItem (key: string) : any {
		return window.localStorage.getItem(key)
	}

	public static showError (err: Object) {
		console.log("there was a problem", err)
		AlertAction.alertError(err.toString())
	}
}