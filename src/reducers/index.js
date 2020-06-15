import { combineReducers } from 'redux'

const themeReducer = (theme = 'default', action) => {
	switch(action.type){
		case 'CHANGE_THEME':
			return action.payload
		default:
			return theme
	}
}

const taskReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TASK':
			return [...state, action.payload]
		case 'DEACTIVATE_TASK':
			return state.map(item => {
				if(item.id === action.payload){
					return {
						...item,
						active: false
					}
				}
				return item
			})
		case 'DEACTIVATE_ALL':
			return state.map(item=> {
				if (item.active === true){
					return {
						...item,
						active: false
					}
				}
				return item
			})
		case 'REACTIVATE_TASK':
			return state.map(item => {
				if(item.id === action.payload){
					return {
						...item,
						active: true
					}
				}
				return item
			})
		case 'REACTIVATE_ALL':
			return state.map(item=> {
				if (item.active === false){
					return {
						...item,
						active: true
					}
				}
				return item
			})
		case 'REMOVE_TASK':
			return state.filter(item => item.id !== action.payload)
		case 'REMOVE_ALL':
			return []
		default:
			return state
	}
}

export default combineReducers({
	globalTheme: themeReducer,
	taskStack: taskReducer
})