import React from 'react'
import styled from 'styled-components'

const CheckBox = styled.input`
	margin: 0;
	border-radius: 5px;
`

export default (props)=>{
	return (
		<div style={{display: 'flex', flexDirection: 'row'}}>
			<h6 style={{margin: '0 5px'}}>MARK ALL AS DONE</h6>
			<CheckBox type={props.type}/>
		</div>
	)
}