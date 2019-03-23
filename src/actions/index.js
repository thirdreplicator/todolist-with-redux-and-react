import {
  SET_TITLE_FILTER,
  TOGGLE_EVEN,
  TOGGLE_ODD,
  SET_TODOS,
  SET_SORTBY_COLUMN,
 TOGGLE_SORTBY_DIRECTION, 
} from '../constants'

export const toggle_even = () => ({ type: TOGGLE_EVEN })
export const toggle_odd = () => ({ type: TOGGLE_ODD })
export const set_title_filter = filter_text => ({ type: SET_TITLE_FILTER, payload: filter_text })
export const set_sortby_column = column_name => ({ type: SET_SORTBY_COLUMN, payload: column_name })
export const toggle_sortby_direction = () => ({ type: TOGGLE_SORTBY_DIRECTION })

const set_todos = todos => ({ type: SET_TODOS, payload: todos })

export const load_todos = () => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        return dispatch(set_todos(json))
      })
      .catch(error => console.error(error))
  }
}
