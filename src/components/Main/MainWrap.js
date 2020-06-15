import styled from 'styled-components'

export default styled.main`
	display: flex;
	flex-direction: column;

	margin: 10px 0 0 0;
	height: 100%;
	background: ${(props)=>props.theme.mainBackgroundColor};
	border-radius: 10px;	
	padding: 10px;
`