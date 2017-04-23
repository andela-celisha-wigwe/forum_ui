/// <reference types="react" />
import * as React from 'react';
export interface NewPostFormProps {
    subforumId: string;
}
export interface NewPostFormState {
    error: boolean;
    username: string;
    password: string;
    body: string;
    title: string;
}
export default class  extends React.Component<NewPostFormProps, NewPostFormState> {
    constructor(props: NewPostFormProps);
    postDataIsValid(): boolean;
    handleNewPost(): void;
    onNewTitle(evt: React.FormEvent<HTMLElement>): void;
    onNewBody(evt: React.FormEvent<HTMLElement>): void;
    render(): JSX.Element;
}
