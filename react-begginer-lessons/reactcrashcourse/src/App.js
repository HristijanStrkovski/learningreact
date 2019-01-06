import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import uuid from 'uuid'
import Axios from 'axios'
import './App.css';


class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({
          todos: res.data
        })
      })
  }

  //Delete TODO
  delTodo = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos/' + { id })
      .then(res => {
        console.log(res);
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      })
  }

  //Check TODO
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Add TODO
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path='/' render={props => (
              <React.Fragment>
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}>
            </Route>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
