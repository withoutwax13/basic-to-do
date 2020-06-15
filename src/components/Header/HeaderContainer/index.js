import styled from 'styled-components'

export default styled.nav`
	@media screen and (max-width: 480px){
		display: flex;
		flex-direction: column;
		
		border-radius: 10px;
		background-color: ${(props)=>props.theme.headerBackgroundColor};
		
	}
	
	@media screen and (max-width: 1000px) and (min-width: 481px){
		display: flex;
		flex-direction: row;

		border-radius: 10px;
		background-color: ${(props)=>props.theme.headerBackgroundColor};
	}
	
	@media screen and (min-width: 1000px) and (max-width: 1800px){
		display: flex;
		flex-direction: row;
		
		border-radius: 10px;
		background-color: ${(props)=>props.theme.headerBackgroundColor};
	}
`