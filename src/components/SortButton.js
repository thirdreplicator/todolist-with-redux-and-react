import React from 'react'
import { connect } from 'react-redux'
import { set_sortby_column, toggle_sortby_direction } from '../actions'

const SortButton = ({columnName, currentColumn, direction, clickHandler}) => {
  let icon
  console.log("columnName", columnName, "direction", direction)
  if (currentColumn == columnName) {
    if (direction == 'ASC') {
      icon = '▲'
    } else {
      icon = '▼'
    }
  } else {
    icon = '◀'
  }
  return <button onClick={() => clickHandler(currentColumn, columnName)} >{icon}</button>
}

const mapStateToProps = state => ({
  currentColumn: state.sortBy.column,
  direction: state.sortBy.direction
})

const mapDispatchToProps = dispatch => ({
  clickHandler: (currentColumn, columnName) => {
    if (currentColumn == columnName) {
      dispatch(toggle_sortby_direction())
    } else {
      dispatch(set_sortby_column(columnName))
    }
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SortButton)
