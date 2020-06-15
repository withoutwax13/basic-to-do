import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
	width: 55px;
	height: 20px;

	border-radius: 100px;
	border: 2px solid black;
	background-color: ${(props)=>props.trigger ? props.theme.mainBorderColor : 'white'};
`

const Switch = styled.div`
	width: 19px;
	height: 19px;
	
	margin-left: ${(props)=>props.trigger ? `35` : `0`}px;

	border-radius: 46px;
	border: 1px solid black;
	background-color: silver;
`

const Heading = styled.div`
	font-size: 1.2rem;
	margin: 0 10px;
`

export default (props) => {
	return (
		<div style={{display: 'flex', flexDirection: 'row'}}>
			<Heading>Inactive</Heading>
			<Frame onClick={()=>props.onToggleSwitch()} trigger={props.trigger}>
				<Switch trigger={props.trigger}/>
			</Frame>
			<Heading>Active</Heading>
		</div>
	)
}