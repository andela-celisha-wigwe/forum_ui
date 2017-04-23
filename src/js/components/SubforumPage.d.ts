/// <reference types="react" />
import * as React from 'react';
import { SubforumInterface } from '../../shared/stores/subforum_store';
import { PostInterface } from '../../shared/stores/post_store';
export interface SubforumPageProps {
    params: {
        id: string;
    };
}
export interface SubforumPageState {
    posts: Array<PostInterface>;
    subforum?: SubforumInterface;
    showForm: boolean;
}
export default class  extends React.Component<SubforumPageProps, SubforumPageState> {
    unsubscribePosts: Function;
    unsubscribeSubforum: Function;
    constructor(props: SubforumPageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleFormToggle(): void;
    onSubforum(subforum: SubforumInterface): void;
    onPosts(posts: Array<PostInterface>): void;
    render(): JSX.Element;
}
