import React, { Component } from 'react'
import TodoItem from './TodoItem'
import propTypes from 'prop-types'

export default class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todoItem={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    delTodo: propTypes.func.isRequired,
    markComplete: propTypes.func.isRequired
}