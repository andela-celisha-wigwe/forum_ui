/// <reference types="react" />
import * as React from 'react';
import { AuthUser } from '../../shared/stores/user_store';
export interface HeaderProperties {
}
export interface HeaderState {
    authUser?: AuthUser;
    showLogout: boolean;
}
export default class Header extends React.Component<HeaderProperties, HeaderState> {
    unsubscribe: Function;
    constructor(props: HeaderProperties);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onAuthUser(authUser: AuthUser): void;
    onShowLogout(): void;
    goHomePage(): void;
    handleLogout(): void;
    render(): JSX.Element;
}
