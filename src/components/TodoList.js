import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import SortButton from './SortButton'

const computeColorClass = (id, highlightEven, highlightOdd) => {
  if ((id % 2 == 0) && highlightEven) {
    return 'even-highlighted'
  } else if ((id + 1) % 2 == 0 && highlightOdd) {
    return 'odd-highlighted'
  } else {
    return 'plain'
  }
}

const filterTodos = (todos, text) => {
  const reg = new RegExp(text, "i")
  return todos.filter(todo => todo.title.match(reg))
}

const sortTodos = (todos, column, direction) => {
  const asc = (a, b) => a[column] > b[column] ? 1 : -1
  const desc = (a, b) => a[column] < b[column] ? 1 : -1
  const comparator = direction == 'ASC' ? asc : desc
  return todos.sort(comparator)
}

export const TodoList = ({ todos, highlightEven, highlightOdd, titleFilter, sortColumn, sortDirection }) => {
  const klass = id => computeColorClass(id, highlightEven, highlightOdd)
  const filteredTodos = filterTodos(todos, titleFilter)
  const sortedTodos = sortTodos(filteredTodos, sortColumn, sortDirection)
  return (
    <table>
        <thead>
          <tr>
            <td>User ID <SortButton columnName='userId' /></td>
            <td>ID <SortButton columnName='id' /></td>
            <td>Title <SortButton columnName='title' /></td>
            <td>status <SortButton columnName='completed' /></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        { filteredTodos && filteredTodos.map(todo => <Todo key={'todo_'+todo.id} todo={todo} idClass={klass(todo.id)} />) }
        </tbody>
      </table>
  )
}

export default connect(state => ({
  todos: state.todoList,
  highlightEven: state.highlight.even,
  highlightOdd: state.highlight.odd,
  titleFilter: state.titleFilter,
  sortColumn: state.sortBy.column,
  sortDirection: state.sortBy.direction,
}))(TodoList)
