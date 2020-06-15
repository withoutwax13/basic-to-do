import styled from 'styled-components'

export default styled.input`

	&:hover {
		box-shadow: 0 0 1px 1px silver;
	}
	@media screen and (min-width: 480px){
		border-radius: 30px;
		border: 1px solid gray;
		width: 150px;
		height: 30px;
		padding: 0 10px;
		outline: none;
		&::placeholder {
			font-weight: bold;
			font-size: 1.0em;
		};	 
	}

	@media screen and (max-width: 480px){
		border-radius: 30px;
		border: 1px solid gray;
		width: 150px;
		height: 30px;
		padding: 0 10px;
		outline: none;
		&::placeholder {
			font-weight: bold;
			font-size: 1.0em;
		};	 
	}
	
	@media screen and (min-width: 760px){
		border-radius: 30px;
		border: 1px solid gray;
		width: 250px;
		height: 30px;
		padding: 0 10px;
		outline: none;
		&::placeholder {
			font-weight: bold;
			font-size: 1.0em;
		};	 
	}

	@media screen and (min-width: 1800px){
		border-radius: 30px;
		border: 1px solid gray;
		width: 600px;
		height: 30px;
		padding: 0 10px;
		outline: none;
		&::placeholder {
			font-weight: bold;
			font-size: 1.0em;
		};	 
	}

	@media screen and (min-width: 1000px){
		border-radius: 30px;
		border: 1px solid gray;
		width: 500px;
		height: 30px;
		padding: 0 10px;
		outline: none;
		&::placeholder {
			font-weight: bold;
			font-size: 1.0em;
		};
	}
`