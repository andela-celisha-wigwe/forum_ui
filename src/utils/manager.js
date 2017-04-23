"use strict";
const alert_action_1 = require("../shared/actions/alert_action");
class default_1 {
    static getHeaders() {
        return this.getItem(this.key)
            ? { Authorization: `Token ${JSON.parse(this.getItem('currentUser')).auth_token}` }
            : {};
    }
    static handleLogin(value) {
        this.setItem(this.key, JSON.stringify(value));
    }
    static handleLogout() {
        this.setItem(this.key, "");
        // window.localStorage.clear()
    }
    static checkLogin() {
        try {
            return JSON.parse(this.getItem(this.key));
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    static setItem(key, value) {
        window.localStorage.setItem(key, value);
    }
    static getItem(key) {
        return window.localStorage.getItem(key);
    }
    static showError(err) {
        console.log("there was a problem");
        alert_action_1.default.alertError(err.toString());
    }
}
default_1.key = 'currentUser';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=manager.js.map