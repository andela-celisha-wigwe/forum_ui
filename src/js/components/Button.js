'use strict'

import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import muiThemeable from 'material-ui/styles/muiThemeable';

const buttonStyle = (props) => {
	return {
		backgroundColor: props.muiTheme.palette.button.backgroundColor,
		color: props.muiTheme.palette.button.color,
		margin: props.muiTheme.palette.button.margin
	}
}

export default muiThemeable()((props) => 
	(<FlatButton { ...props } style={ buttonStyle(props) } />)
)
