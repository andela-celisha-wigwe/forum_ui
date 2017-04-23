/// <reference types="react" />
import * as React from 'react';
export interface CustomMUIButton {
    height?: number;
    minWidth?: number;
    iconButtonSize?: number;
    textTransform?: "uppercase";
    color?: string;
    textColor?: string;
    backgroundColor?: string;
    margin?: string;
}
export interface AppProps {
    children: any;
}
export interface AppState {
}
export default class  extends React.Component<AppProps, AppState> {
    constructor(props: AppProps);
    /**
   * Render current page
   */
    renderChildren(): React.DOMElement<{}, Element>;
    render(): JSX.Element;
}
