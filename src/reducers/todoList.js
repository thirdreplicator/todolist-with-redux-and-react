import { SET_TODOS } from '../constants' 

export default (state=false, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload
    default:
      return state
  }
}
