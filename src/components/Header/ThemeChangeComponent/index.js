import React from 'react'
import { connect } from 'react-redux'

import Presentation from './Presentation'
import { changeTheme } from '../../../actions'

const ThemeChangeComponent = (props) => {

	const options = [
						{theme: 'default', label: 'Default Theme'}, 
						{theme: 'darkMode', label: 'Night Theme'}, 
						{theme: 'lightBlue', label: 'Sky Theme'}
					]
	return (
		<Presentation name='themeSelect' id='themeSelect' onChange={event=>props.changeTheme(event.target.value)}>
			<option value={props.theme}>Change current theme</option>
			{options.map(item=><option key={item.theme} value={item.theme}>{item.label}</option>)}
		</Presentation>
	)
}

const mapStateToProps = (state) => {
	return {
		theme: state.globalTheme
	}
}

export default connect(mapStateToProps, { changeTheme })(ThemeChangeComponent)