import React from 'react'

import HeaderContainer from './HeaderContainer'
import ThemeChangeContainer from './ThemeChangeContainer'

import ThemeChangeComponent from './ThemeChangeComponent'

const Header = () => {
	return (
		<HeaderContainer>
			<ThemeChangeContainer>
				<ThemeChangeComponent/>
			</ThemeChangeContainer>
		</HeaderContainer>
	)
}

export default Header