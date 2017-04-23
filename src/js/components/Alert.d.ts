/// <reference types="react" />
import * as React from 'react';
export interface AlertProperties {
    timeout: number;
}
export interface AlertState {
    text: string;
    show: boolean;
}
export declare class Alert extends React.Component<AlertProperties, AlertState> {
    unsubscribe: Function;
    constructor(props: AlertProperties);
    onAlertRequest(text: string): void;
    hide(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleRequestClose(): void;
    render(): JSX.Element;
}
export default Alert;
