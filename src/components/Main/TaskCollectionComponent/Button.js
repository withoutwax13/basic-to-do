import styled from 'styled-components'

export default styled.button`
	width: 30px;
	height: 20px;
	
	margin-top: 0;

	outline: none;

	border-radius: 40px;
	background-color: ${(props)=>props.primary ? props.theme.buttonColor.primary : props.theme.buttonColor.secondary};
	
	&:hover {
		transform: scale(1.05, 1.05);
	};
	&:active {
		transform: scale(1.2, 1.2);
	};
`