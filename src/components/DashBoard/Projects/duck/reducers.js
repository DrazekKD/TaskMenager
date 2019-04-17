import types from './types';


const INITIAL_STATE = {
	list: [
		{
			name: 'JS',
			id: 1,
		},
		{
			name: 'PHP',
			id: 2,
		},
		{
			name: 'PY',
			id: 3,
		},
	],
};

const projectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_PROJECT:
			return {
				...state, list: [...state.list, action.item],
			};
		case types.DELETE_PROJECT:
			return{
				...state, list:[...state.list.filter((item) => { return item.id !== action.item.id;})]
			};
		case types.RESET_PROJECT:
			return {
				...state, list: [],
			};
		default:
			return state;
	}
};

export default projectsReducer;
