
import React from 'react';
import axios from 'axios';

class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todo: {
        name: '',
        message: ''
      }
    };

    this.changeField = this.changeField.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeField (name) {
    return (e) => {
      this.state.todo[name] = e.target.value;
      this.setState(this.state);
    };
  }

  submit (e) {
    e.preventDefault();
    axios.post('http://localhost:8080/tasks', this.state.todo).then(response => {
      console.log(response.data);
      this.props.getTodos();
    });
    console.log('OK');
  }

  render () {
    return (
      <form>
        <label>Awsome name</label>
        <input type='text' id='name' name='name' placeholder='Name' value={this.state.todo.name} onChange={this.changeField('name')} />
        <label>Awsome message</label>
        <input type='text' id='message' name='message' placeholder='Message' value={this.state.todo.message} onChange={this.changeField('message')} />
        <input type='submit' value='Save' onClick={this.submit} />
      </form>
    );
  }
}

export default AddTodo;
