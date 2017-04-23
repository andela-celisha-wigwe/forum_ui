/// <reference types="react" />
import * as React from 'react';
export interface UserLoginProps {
}
export interface UserLoginState {
    username: string;
    password: string;
    error: boolean;
}
export default class  extends React.Component<UserLoginProps, UserLoginState> {
    constructor(props: UserLoginProps);
    loginDataIsValid(): boolean;
    onUsername(evt: React.FormEvent<HTMLElement>): void;
    onPassword(evt: React.FormEvent<HTMLElement>): void;
    handleLogin(): void;
    render(): JSX.Element;
}
