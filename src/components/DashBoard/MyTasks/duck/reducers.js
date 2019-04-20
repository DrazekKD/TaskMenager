import types from './types';


const INITIAL_STATE = {
	list: [
		{
			name: 'Tom Hanks',
			project:'JS',
			isCompeted: false,
			description:'Description',
			id: '1',
		},
		{
			name: 'Tom Hanks',
			project:'PHP',
			isCompeted: false,
			description:'Description',
			id: '2',
		},
		{
			name: 'Tom Hanks',
			project:'PY',
			isCompeted: false,
			description:'Description',
			id: '3',
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
		case types.CHANGE_ELEMENT_TASK:
			return {
				...state, list: [...state.list.map(item => item.id === action.item.id? action.item : item)],
			};
		case types.COMPLETED_TASK:
			return{
				...state, list: [...state.list.map(item => item.id === action.item.id? action.item : item)],
			};
		case types.RESET_TASKS:
			return {
				...state, list: [],
			};
		default:
			return state;
	}
};

export default tasksReducer;
