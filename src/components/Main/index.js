import React from 'react'

import { connect } from 'react-redux'

import MainWrap from './MainWrap.js'
import NewTask from './NewTaskComponent/NewTask.js'
import TaskCollectionWrapper from './TaskCollectionComponent/TaskCollectionWrapper.js'
import Task from './TaskCollectionComponent/Task.js'
import ListToggle from './ListToggle.js'

import { addTask, removeTask, deactivateTask, reactivateTask } from '../../actions'

const Main = (props) => {
	const RenderActiveList = () => {
		return props.tasks.map(item=>{
			if (item.active){
			return <Task 
						key={item.id} 
						data={item} 
						deactivate={props.deactivateTask} 
						reactivate={props.reactivateTask}
					/>
			}
		})
	}
	const RenderInactiveList = () => {
		return props.tasks.map(item=>{
			if (!(item.active)){
				return <Task
							key={item.id}
							data={item}
							deactivate={props.deactivateTask}
							reactivate={props.reactivateTask}
							remove={props.removeTask}
						/>
			}
		})
	}

	const [toggleActiveTasks, setToggle] = React.useState(true)

	const renderList = () => {
		return (
			toggleActiveTasks ? RenderActiveList() : RenderInactiveList()
		)
	}

	const onToggleSwitch = () => {
		setToggle(!(toggleActiveTasks))
	}

	return (
		<MainWrap>
			<NewTask add={props.addTask}/>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
				<ListToggle trigger={toggleActiveTasks} onToggleSwitch={onToggleSwitch}/>
			</div>
			<TaskCollectionWrapper>
				{props.tasks ? renderList() : ``}
			</TaskCollectionWrapper>
		</MainWrap>
	)
}

const mapStateToProps = (state) => {
	return {
		tasks: state.taskStack
	}
}

export default connect(mapStateToProps, { addTask, removeTask, deactivateTask, reactivateTask })(Main)