import { SET_SORTBY_COLUMN, TOGGLE_SORTBY_DIRECTION} from '../constants'

export default (state={ column: 'userId', direction: 'ASC' }, action) => {
  switch (action.type) {
    case SET_SORTBY_COLUMN:
      return { direction: 'ASC', column: action.payload }
    case TOGGLE_SORTBY_DIRECTION:
      return { ...state, direction: state.direction == 'ASC' ? 'DESC' : 'ASC' }
    default:
      return state
  }
}


