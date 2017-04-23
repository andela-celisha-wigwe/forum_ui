'use strict'

import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'
import muiThemeable from 'material-ui/styles/muiThemeable';

export interface ButtonInterface {
	muiTheme?: {
		palette: {
			margin: string
			color: string,
		},
		button: {
			backgroundColor: string,
		}
	},
	onClick?: React.EventHandler<React.MouseEvent<{}>>,
	label: string,
	className?: string
}

const buttonStyle = (props: ButtonInterface) => {
	return {
		backgroundColor: props.muiTheme.button.backgroundColor,
		color: props.muiTheme.palette.color,
		margin: props.muiTheme.palette.margin
	}
}

export default muiThemeable()((props: ButtonInterface) => 
	(<FlatButton { ...props } style={ buttonStyle(props) } />)
)
