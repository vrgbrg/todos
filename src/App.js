import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Wrapper from './Wrapper';
import AddTodo from './AddTodo';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    };
    console.log('hello');

    this.getTodos = this.getTodos.bind(this);
  }

  getTodos () {
    axios.get('http://localhost:8080/tasks').then(response => {
      console.log(response);
      this.setState({ todos: response.data });
    });
  }

  componentDidMount () {
    this.getTodos();
  }

  render () {
    return (
      <div>
        <Wrapper>
          <TodoList todos={this.state.todos} />
          <AddTodo getTodos={this.getTodos} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
