import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    console.log('hello');
  }

  render () {
    const todos = this.props.todos.map(todo => <TodoItem item={todo} key={todo.id} />);
    console.log(todos);
    return (
      <div className='todo-list'>
        {todos}
      </div>
    );
  }
}

export default TodoList;
