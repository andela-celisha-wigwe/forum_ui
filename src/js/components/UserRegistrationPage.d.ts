/// <reference types="react" />
import * as React from 'react';
export interface UserRegistrationProps {
}
export interface UserRegistrationState {
    username: string;
    password: string;
    password_confirmation: string;
    error: boolean;
}
export default class  extends React.Component<UserRegistrationProps, UserRegistrationState> {
    constructor(props: UserRegistrationProps);
    onUsername(evt: React.FormEvent<HTMLElement>): void;
    onPassword(evt: React.FormEvent<HTMLElement>): void;
    onConfirmation(evt: React.FormEvent<HTMLElement>): void;
    registrationDataIsValid(): boolean;
    handleRegister(): void;
    render(): JSX.Element;
}
