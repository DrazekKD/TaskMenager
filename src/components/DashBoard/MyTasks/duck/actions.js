import types from './types';

const add = item => ({
	type: types.ADD_TASK, item,
});

const del = item => ({
	type: types.DELETE_TASK, item,
});
const changeElement = item => ({
	type: types.CHANGE_ELEMENT_TASK, item
});

const completed = item => ({
	type: types.COMPLETED_TASK, item,
});

const reset = item => ({
	type: types.RESET_TASKS, item,
});


export default {
	add,
	del,
	changeElement,
	completed,
	reset,
};
