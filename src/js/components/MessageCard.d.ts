/// <reference types="react" />
import * as React from 'react';
export interface MessageCardProps {
    body: string;
    at: string;
    id: string;
}
export interface MessageCardState {
}
export default class  extends React.Component<MessageCardProps, MessageCardState> {
    constructor(props: MessageCardProps);
    render(): JSX.Element;
}
