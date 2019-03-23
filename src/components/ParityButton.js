import React from 'react'
import { connect } from 'react-redux'
import { toggle_even, toggle_odd } from '../actions'

const ParityButton = ({dispatch, parity}) => {
  let clickHandler
  if (parity == 'even') {
    clickHandler = toggle_even
  } else if (parity == 'odd') {
    clickHandler = toggle_odd
  }
  return <button onClick={() => dispatch(clickHandler())} >{parity}</button>
}
export default connect()(ParityButton)
