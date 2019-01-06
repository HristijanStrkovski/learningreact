import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '10px',
            borderButton: '1px #ccc dotted',
            textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todoItem;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//PropTypes
TodoItem.propTypes = {
    todoItem: propTypes.object.isRequired,
    delTodo: propTypes.func.isRequired,
    markComplete: propTypes.func.isRequired
}

export default TodoItem
