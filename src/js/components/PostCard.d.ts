/// <reference types="react" />
import * as React from 'react';
export interface PostCardProps {
    id: string;
    title: string;
    body: string;
}
export interface PostCardState {
}
export interface CardHeaderProps {
    className: string;
}
export default class  extends React.Component<PostCardProps, PostCardState> {
    constructor(props: PostCardProps);
    showPost(): void;
    render(): JSX.Element;
}
