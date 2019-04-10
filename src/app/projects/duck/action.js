import types from './types'

const add = item => ({
	type: types.ADD_PROJECT, item
});

const reset = item => ({
	type: types.RESET_PROJECT, item
});

export default {
	add,
	reset
}