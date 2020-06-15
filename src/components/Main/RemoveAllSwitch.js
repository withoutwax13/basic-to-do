import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	margin: 0;
	border-radius: 5px;
	background-color: white;
	width: 100px;
	height: 30px;
	outline: none;
`

export default () => {
	return (
		<Button><h6 style={{margin: '0'}}>Remove All</h6></Button>
	)
}