import types from './types';

const add = item => ({
	type: types.ADD_TASK, item,
});

const del = item => ({
	type: types.DELETE_TASK, item,
});

const reset = item => ({
	type: types.RESET_TASK, item,
});


export default {
	add,
	del,
	reset,
};
