import React from 'react'
import { connect } from 'react-redux'
import { set_title_filter } from '../actions'

const TitleFilter = ({ titleFilter, dispatch }) => (
  <input type="text" value={ titleFilter} placeholder="Title filter" onChange={event => dispatch(set_title_filter(event.target.value))}/>
)

export default connect(state => ({titleFilter: state.titleFilter}))(TitleFilter)
