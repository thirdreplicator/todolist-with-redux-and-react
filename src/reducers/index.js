import { combineReducers } from 'redux'
import titleFilter from './titleFilter'
import highlight from './highlight'
import todoList from './todoList'
import sortBy from './sortBy'

export default combineReducers({
  titleFilter,
  highlight,
  todoList,
  sortBy
})
