import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers'

const INITIAL_STATE = { 
  titleFilter: '',
  highlight: {even: false, odd: false},
  todoList: [],
  sortBy: { column: 'userId', direction: 'ASC' }
}
const store = createStore(
  reducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(thunk)
  )
)

export default store;

