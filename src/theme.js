import React from 'react'
import { ThemeProvider } from 'styled-components'

import { connect } from 'react-redux'

const defaultTheme = {
	'headerBackgroundColor': 'white',
	'color': 'black',
	'mainBackgroundColor': 'white',
	'mainBorderColor': 'pink',

	'buttonColor': {
		'primary': 'pink',
		'secondary': 'white'
	},
	'fontFamily': {
		'main': 'Nunito',
		'alternative': 'sans-serif'
	}
}

const nightModeTheme = {
	'headerBackgroundColor': 'black',
	'color': 'white',
	'mainBackgroundColor': 'white',
	'mainBorderColor': 'black',

	'buttonColor': {
		'primary': 'black',
		'secondary': 'silver'
	},
	'fontFamily': {
		'main': 'Caveat',
		'alternative': 'cursive'
	}
}

const skyTheme = {
	'headerBackgroundColor': 'lightblue',
	'color': 'black',
	'mainBackgroundColor': 'white',
	'mainBorderColor': 'lightblue',

	'buttonColor': {
		'primary': 'lightblue',
		'secondary': 'white'
	},
	'fontFamily': {
		'main': 'Inconsolata',
		'alternative': 'monospace'
	}
}

const Theme = (props) => {
	const theme = () => {
		switch(props.theme){
			case 'default':
				return defaultTheme
			case 'darkMode':
				return nightModeTheme
			case 'lightBlue':
				return skyTheme
			default:
				return defaultTheme
		}
	}

	console.log(props.theme)

	return (
		<ThemeProvider theme={theme()}>
			{props.children}
		</ThemeProvider>
	)
} 

const mapStateToProps = (state) => {
	return {
		theme: state.globalTheme
	}
}

export default connect(mapStateToProps)(Theme)