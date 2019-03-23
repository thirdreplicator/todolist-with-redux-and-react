import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import TitleFilter from './components/TitleFilter'
import ParityButton from './components/ParityButton'
import TodoList from './components/TodoList'
import { load_todos } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(load_todos())
  }

  render() {
    return (
      <div>
      <TitleFilter />
      <ParityButton parity="even"/>
        <TodoList />
      </div>
    );
  }
}

export default connect()(App)
