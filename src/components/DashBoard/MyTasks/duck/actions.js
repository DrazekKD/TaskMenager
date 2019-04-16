import types from './types'

const add = item => ({
  type: types.ADD_TASK, item
})

const reset = item => ({
  type: types.RESET_TASK, item
})

export default {
  add,
  reset
}
