import React from 'react'
import Logic from './Logic.js'
import Presentation from './Presentation.js'

const SearchComponent = () => {
	return (
		<Logic>
			<Presentation type='text' placeholder='Search...'/>
		</Logic>
	)
}

export default SearchComponent