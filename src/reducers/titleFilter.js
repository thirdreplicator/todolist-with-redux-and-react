import { SET_TITLE_FILTER } from '../constants'

export default (state = '', action) => {
  switch (action.type) {
    case SET_TITLE_FILTER:
      return action.payload
    default:
      return state
  }
}


