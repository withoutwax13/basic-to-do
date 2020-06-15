import styled from 'styled-components'

export default styled.input`
	margin: 10px;
	border-radius: 20px;
	outline: none;
	padding: 0 10px;
	
	&:focus{
		transform: scale(1.025, 1.1);
	};

	@media screen and (max-width: 480px){
		width: 200px;
		height: 50px;
	}
	
	@media screen and (max-width: 750px) and (min-width: 480px){
		width: 300px;
		height: 50px;
	}
	
	@media screen and (max-width: 1000px) and (min-width: 750px){
		width: 500px;
		height: 50px;
	}

	@media screen and (max-width: 1800px) and (min-width: 1000px){
		width: 600px;
		height: 50px;
	}
`