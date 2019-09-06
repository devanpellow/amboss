import React, { Component } from "react";
// import { Global, css } from '@emotion/core'
import styled from "@emotion/styled";

const ContentWrapper = styled.section`
	margin-top: 50px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const FormHeader = styled.h1`
	color: darkblue;
	text-decoration: underline;
`;

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	min-width: 40vw;
	min-height: 30vh;
	border: 2px solid darkblue;
  border-radius: 3px;
`;


const Submit = styled.input`
	font-size: 1em;
	color: darkblue;
	padding: 0.25em 1em;
	border: 2px solid darkblue;
	border-radius: 3px;
  }
  `;

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		console.log(this.state);
		const resultStr = JSON.stringify(this.state, null, 2);
		alert(`${this.props.user.header} was submitted: ` + resultStr);
		event.preventDefault();
	}

	render() {
		const inputsArr = this.props.user.inputs;

		return (
			<ContentWrapper>
				<FormHeader>{this.props.user.header}</FormHeader>
				<FormWrapper onSubmit={this.handleSubmit}>
					{inputsArr.map((value, index) => {
						return (
							<div>
								<label>{value.label}:</label>
								<input
									key={index}
									name={value.name}
									type={value.type}
									value={this.state.value}
									onChange={this.handleChange}
									required={value.required}
								/>
							</div>
						);
					})}
					<Submit type="submit" value={this.props.user.submit} />
				</FormWrapper>
			</ContentWrapper>
		);
	}
}

export default Form;
