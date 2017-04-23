/// <reference types="react" />
import * as React from 'react';
export interface SubforumCardProps {
    id: string;
    name: string;
    description: string;
}
export interface SubforumCardState {
}
export default class  extends React.Component<SubforumCardProps, SubforumCardState> {
    constructor(props: SubforumCardProps);
    showSubforum(): void;
    render(): JSX.Element;
}
