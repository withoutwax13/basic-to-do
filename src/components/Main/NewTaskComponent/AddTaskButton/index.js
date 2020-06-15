import styled from 'styled-components'

export default styled.button`
	height: 30px;
	width: 30px;

	border-radius: 60px;
	border: 1px solid black;
	outline: none;

	background-color: ${(props)=>props.primary ? props.theme.buttonColor.primary : props.theme.buttonColor.secondary};
	color: ${(props)=>props.theme.color};

	&:hover {
		transform: scale(1.05, 1.05);
	};
	&:active {
		transform: scale(1.2, 1.2);
	};
`