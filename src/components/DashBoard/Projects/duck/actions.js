import types from './types'

const add = item => ({
	type: types.ADD_PROJECT, item
});

const del = item => ({
	type: types.DELETE_PROJECT, item
});

const rename = item => ({
	type: types.RENAME_PROJECT, item
});

const reset = item => ({
	type: types.RESET_PROJECT, item
});

export default {
	add,
	del,
	rename,
	reset
}