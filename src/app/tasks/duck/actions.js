import types from './types'

const add = item => ({
	types: types.ADD_TASK, item
});

const reset = item => ({
	types: types.RESET_TASK, item
});

export default {
	add,
	reset
}