import { HeaderInterface } from '../shared/utils/api';
export default class  {
    static key: string;
    static getHeaders(): HeaderInterface;
    static handleLogin(value: Object): void;
    static handleLogout(): void;
    static checkLogin(): any;
    static setItem(key: string, value: any): void;
    static getItem(key: string): any;
    static showError(err: Object): void;
}
