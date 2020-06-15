import styled from 'styled-components'

export default styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 300px;
	height: 100px;
	
	border-radius: 10px;
	border: 1px solid black;

	box-shadow: 1px 1px 0 2px gray;

	margin: 5px 10px;
	padding: 20px 10px;

	background-color: ${(props)=>props.theme.mainBorderColor};
	
`