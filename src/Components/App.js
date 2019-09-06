import React from "react";
import UserContactForm from "../Forms/UserContactForm";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const globalStyles = css`
	body {
		font-family: sans-serif;
		background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
	}
`;

// example of styled component
// https://emotion.sh/docs/styled
const FormHeader = styled.h1`
	color: darkblue;
`;

const App = () => (
	<React.Fragment>
		<Global styles={globalStyles} />
		<FormHeader>AMBOSS - Custom Form Challenge 🚀</FormHeader>
		<UserContactForm />
		
	</React.Fragment>
);

export default App;
