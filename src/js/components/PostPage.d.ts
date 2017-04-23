/// <reference types="react" />
import * as React from 'react';
import { MessageInterface } from '../../shared/stores/message_store';
import { PostInterface } from '../../shared/stores/post_store';
export interface PostPageProps {
    params: {
        id: string;
    };
}
export interface PostPageState {
    messages: Array<MessageInterface>;
    post?: PostInterface;
}
export default class  extends React.Component<PostPageProps, PostPageState> {
    unsubscribePost: Function;
    unsubscribeMessages: Function;
    constructor(props: PostPageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onMessages(messages: Array<MessageInterface>): void;
    onPost(post: PostInterface): void;
    render(): JSX.Element;
}
