/// <reference types="react" />
import * as React from 'react';
export interface NewMessageFormProps {
    postId: string;
}
export interface NewMessageFormState {
    body: string;
    error: boolean;
}
export default class  extends React.Component<NewMessageFormProps, NewMessageFormState> {
    constructor(props: NewMessageFormProps);
    handleNewMessage(): void;
    onNewText(evt: React.FormEvent<HTMLElement>): void;
    render(): JSX.Element;
}
