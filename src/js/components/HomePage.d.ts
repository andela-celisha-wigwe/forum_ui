/// <reference types="react" />
import * as React from 'react';
import { SubforumInterface } from '../../shared/stores/subforum_store';
export interface HomePageProps {
}
export interface HomePageState {
    subforums: Array<SubforumInterface>;
}
export default class HomePage extends React.Component<HomePageProps, HomePageState> {
    unsubscribe: Function;
    constructor(props: HomePageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onSubforums(subforums: Array<SubforumInterface>): void;
    render(): JSX.Element;
}
