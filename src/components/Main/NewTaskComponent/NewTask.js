import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewTaskWrap from './NewTaskWrap'
import AddTaskButton from './AddTaskButton'
import ClearInputButton from './ClearInputButton'
import NewTaskInput from './NewTaskInput'

const NewTask = (props) => {

	const [newTaskInput, setNewTaskInput] = React.useState(``)

	return (
		<NewTaskWrap>
			<NewTaskInput placeholder='New Task' value={newTaskInput} onChange={e=>setNewTaskInput(e.target.value)}/>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<AddTaskButton primary onClick={()=>{
					props.add({
						id: uuidv4(), what: newTaskInput.length > 80 ? 
													newTaskInput.split('').slice(0, 81).join('') : 
													newTaskInput, 
													active: true
												})
					setNewTaskInput(``)
				}}>+</AddTaskButton>
				<ClearInputButton primary onClick={()=>setNewTaskInput(``)}>x</ClearInputButton>
			</div>
		</NewTaskWrap>
	)
}

export default NewTask