import React from 'react'

import Theme from '../theme.js'
import AppWrapper from './AppWrapper.js'
import Header from './Header'
import Main from './Main'

export const App = () => {
	return (
		<Theme>
			<AppWrapper>
				<Header/>
				<Main/>
			</AppWrapper>
		</Theme>
	)
}