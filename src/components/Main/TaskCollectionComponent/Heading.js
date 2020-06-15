import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Heading = styled.h4`

	color: ${(props)=>props.theme.color};
	font-family: ${(props)=>props.theme.fontFamily.main};
	font-size: 1.3rem;
	text-decoration: ${(props)=>props.active ? `none` : `line-through`};

	margin: 0;
	padding: 0;
`

const HeadingWrap = styled.div`
	display: flex;
	flex-direction: column;

	margin: 0;
	padding: 0;
`

export default ({children, active}) => {
	const splitChildren = () => {
		let chopped = children.split('')
		let reborn = []
		let current = []
		if (chopped.length === 1){
			return chopped
		}
		for (let char = 0; char < children.length; char++){
			if (char % 20 === 0){
				if (char !== 0){
					reborn.push(current.join(''))
					current = []
				}else{
					current.push(chopped[char])
				}
			}
			else if (char === children.length - 1){
				current.push(chopped[char])
				reborn.push(current.join(''))
			}
			else{
				current.push(chopped[char])
			}
		}
		return reborn
	}
	return (
		<HeadingWrap>
			{splitChildren().map(part=><Heading active={active} key={uuidv4()}>{part}</Heading>)}
		</HeadingWrap>
	)
}