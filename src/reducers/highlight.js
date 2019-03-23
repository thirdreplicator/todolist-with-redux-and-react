import { TOGGLE_EVEN, TOGGLE_ODD } from '../constants' 

export default (state=false, action) => {
  switch (action.type) {
    case TOGGLE_EVEN:
      return {...state, even: !state.even }
    case TOGGLE_ODD:
      return {...state, odd: !state.odd }
    default:
      return state
  }
}
