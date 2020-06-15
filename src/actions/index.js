export const changeTheme = (themeChoice) => {
	return {
		type: 'CHANGE_THEME',
		payload: themeChoice
	}
}

export const addTask = (task) => {
	return {
		type: 'ADD_TASK',
		payload: task
	}
}

export const deactivateTask = (taskID) => {
	return {
		type: 'DEACTIVATE_TASK',
		payload: taskID
	}
}

export const deactivateAll = () => {
	return {
		type: 'DEACTIVATE_ALL'
	}
}

export const reactivateTask = (taskID) => {
	return {
		type: 'REACTIVATE_TASK',
		payload: taskID
	}
}

export const reactivateAll = () => {
	return {
		type: 'REACTIVATE_ALL'
	}
}

export const removeTask = (taskID) => {
	return {
		type: 'REMOVE_TASK',
		payload: taskID
	}
}

export const removeAll = () => {
	return {
		type: 'REMOVE_ALL'
	}
}