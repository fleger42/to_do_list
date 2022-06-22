import './index.css';
import React from 'react';
import Backdrop from './Backdrop.js'
import Modal from './Modal.js'
import { useState } from 'react';

function Todo(props) {
		
	const [ modalIsOpen, setModalIsOpen ] = useState(false);


	function desactivateModal() {
		setModalIsOpen(false);
	}

	function deleteHandler() {
		setModalIsOpen(true);
	}

  	function render() {
	  	const render_tab = props.task_data.map((data, index) => {
		const retgreen = (
			<div className='greencard' key={index}>
				<h2>{data.task_name}</h2>
				<h3>{data.task_description}</h3>
				<div className='actions'>
					<button className='btn-green' onClick={deleteHandler}>Delete</button>
					<button className='btn-green' onClick={deleteHandler}>Edit</button>
				</div>
				{modalIsOpen && <Modal removeFunction={ () => props.removeFunction(index)} closeModal={desactivateModal}/>}
				{modalIsOpen && <Backdrop closeModal={desactivateModal}/>}
	 		</div>
		)
		
		const retred = (	
			<div className='redcard' key={index}>
				<h2>{data.task_name}</h2>
				<h3>{data.task_description}</h3>
				<div className='actions'>
			  		<button className='btn-red' onClick={deleteHandler}>Delete</button>
					<button className='btn-red' onClick={deleteHandler}>Edit</button>
				</div>
				{modalIsOpen && <Modal removeFunction={ () => props.removeFunction(index)} closeModal={desactivateModal}/>}
				{modalIsOpen && <Backdrop closeModal={desactivateModal}/>}
	 		</div>
		)
		if(data.task_status === 'done')
			return retgreen
		return retred
	  })
	  return <div>{render_tab}</div>
	}
	
	return render()

}

export default Todo;
