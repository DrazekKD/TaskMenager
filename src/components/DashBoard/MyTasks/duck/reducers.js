import types from './types';


const INITIAL_STATE = {
	list: [
		{
			name: 'Tom Hanks',
			project:'JS',
			id: 1,
		},
		{
			name: 'Tom Hanks',
			project:'PHP',
			id: 2,
		},
		{
			name: 'Tom Hanks',
			project:'PY',
			id: 3,
		},
	],
};

const tasksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_TASK:
			return {
				...state, list: [...state.list, action.item],
			};
		case types.DELETE_TASK:
		return {
			...state, list: [...state.list.filter(item => item.id !== action.item.task.id)]
		};
		case types.RESET_TASK:
			return {
				...state, list: [],
			};
		default:
			return state;
	}
};

export default tasksReducer;
