import types from './types'


const INITIAL_STATE = {
  list: [
    'Tom Hanks', 'Julia Roberts', 'Angelina Jolie'
  ]
}

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state, list: [...state.list, action.item]
      }
    case types.RESET_TASK:
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

export default tasksReducer
