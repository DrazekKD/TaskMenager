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
			id: 2,
		},
	],
};

const projectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_PROJECT:
			return {
				...state, list: [...state.list, action.item],
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
