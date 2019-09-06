import React, { Component } from "react";
import Form from "../Components/Form";

export class UserContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: "User Contact Form",
			inputs: [
				{ label: "First Name", name: "firstName", type: "text", required: true },
				{ label: "Last Name", name: "lastName", type: "text", required: false },
				{ label: "Area Code", name: "areaCode", type: "number", required: false },
				{ label: "Phone Number", name: "phoneNumber", type: "number", required: true }
			],
			submit: "Submit User Contact Form 🔥"
		};
	}

	render() {
		return (
			<div>
				<Form user={this.state} />
			</div>
		);
	}
}

export default UserContactForm;
