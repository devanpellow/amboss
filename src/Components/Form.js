import React, { Component } from "react";

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps() {
		this.setState({
			response: this.props.user
		});
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
		// console.log(inputsArr)

		return (
			<div>
				<h2>{this.props.user.header}</h2>
				<form onSubmit={this.handleSubmit}>
					{inputsArr.map((value, index) => {
						return (
							<label key={index}>
								{value.label}
								<input
									name={value.name}
									type={value.type}
									value={this.state.value}
									onChange={this.handleChange}
									required={value.required}
								/>
							</label>
						);
					})}
					<input type="submit" value={this.props.user.submit} />
				</form>
			</div>
		);
	}
}

export default Form;
