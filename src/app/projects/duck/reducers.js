import types from './types'

const INITIAL_STATE = {
	list: [
		'Dev','Msw'
	]
};

const projectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_PROJECT:
			return {...state, list:[...state.list, action.item]};
		case  types.RESET_PROJECT:
			return {...state, list:[]};
		default:
			return state
	}
}

export default projectsReducer