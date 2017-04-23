/// <reference types="react" />
import * as React from 'react';
export interface ButtonInterface {
    muiTheme?: {
        palette: {
            margin: string;
            color: string;
        };
        button: {
            backgroundColor: string;
        };
    };
    onClick?: React.EventHandler<React.MouseEvent<{}>>;
    label: string;
    className?: string;
}
declare var _default: (props: ButtonInterface) => JSX.Element;
export default _default;
