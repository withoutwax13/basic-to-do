import React from 'react'

import Heading from './Heading.js'
import TaskContainer from './TaskContainer.js'
import CheckBox from './CheckBox.js'
import Button from './Button.js'

const Task = (props) => {
	const onHandleCheck = () => {
		props.data.active ? props.deactivate(props.data.id) : props.reactivate(props.data.id)
	}
	return (
		<div>
			<TaskContainer>
				<Heading active={props.data.active}>{props.data.what}</Heading>
				<div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
					<CheckBox type='checkbox' onChange={()=>onHandleCheck()}/>
					{props.data.active ? `` : <Button primary={false} onClick={()=>props.remove(props.data.id)}>X</Button>}
				</div>
			</TaskContainer>
			
		</div>
	)
}

export default Task