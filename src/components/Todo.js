import React from 'react'
import { connect } from 'react-redux'
import ParityButton from './ParityButton'

export const Todo = ({ todo, idClass}) => {
  return (
    <tr>
      <td>{todo.userId}</td>
      <td className={idClass}>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'completed' : '-'}</td>
      <td><ParityButton parity="odd"/></td>
    </tr>
  )
}

export default Todo
