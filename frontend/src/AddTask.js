import { Component } from "react";
import Form from "./Form.js";
import Backdrop from "./Backdrop.js";

class AddTask extends Component {

	state = {
		formIsOpen: false,
	}

	desactivateForm = () => {
		this.setState({
			formIsOpen: false
		})
	}

	activateForm = () => {
		this.setState({
			formIsOpen: true
		})
	}

	render() {
		return (
			<div>
				<button className='button-task' onClick={this.activateForm}>New</button>
				{this.state.formIsOpen && <Form AddNewTask={this.props.AddNewTask} closeBackdrop={this.desactivateForm}/>}
				{this.state.formIsOpen && <Backdrop closeBackdrop={this.desactivateForm}/>}
			</div>
		)
	}
}

export default AddTask