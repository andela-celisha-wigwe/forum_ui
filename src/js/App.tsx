'use strict'

import * as React from 'react'
import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import { lightBaseTheme } from 'material-ui/styles'
// import * as injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// const lightMuiTheme = getMuiTheme(lightBaseTheme);

import Footer from './components/Footer'
import Alert from './components/Alert'

export interface CustomMUIButton {
  height?: number;
  minWidth?: number;
  iconButtonSize?: number;
  textTransform?: "uppercase";
  color?: string;
  textColor?: string; // this is for the text color
  backgroundColor?: string;
  margin?: string;
}

const button : CustomMUIButton = {
  height: 30,
  minWidth: 100,
  iconButtonSize: 30,
  textTransform: "uppercase",
  textColor: "#ffffff", // this is for the text color,
  color: "#99bcdd",
  backgroundColor: "#ddcb99",
  margin: '0 10px'

}

const myTheme = getMuiTheme({
  palette: {
    textColor: '#333333',
    alternateTextColor: '#ffffff',
    primary1Color: '#30445C',
    primary2Color: '#ffffff',
    primary3Color: '#333333',
    accent1Color: '#4dcadd',
    disabledColor: '#f2f2f2',
  },
  button: button,
  flatButton: {

    // backgroundColor: 'rgb(136, 169, 208)',
    // color: '#ffffff',
    // margin: '0 10px'

    color: 'rgb(136, 169, 208)', // this is for the background
    textColor: '#ffffff', // this is for the text color
  },
  fontFamily: 'Roboto'
  // spacing: '' // spacing between elements
});

export interface AppProps {
  children: any // not so sure of this option.
}

export interface AppState {

}

export default class extends React.Component <AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
  }

	/**
   * Render current page
   */
  renderChildren () {
    return React.cloneElement(this.props.children, {});
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
        <div>
          <div className="main-header">
            <Header />
          </div>
          <Alert timeout={5000} />
          <div className="main-body">
            {this.renderChildren()}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}