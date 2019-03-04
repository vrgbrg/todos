/* global alert */

import React from 'react';
import axios from 'axios';
import './TodoItem.css';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    console.log('hello');
    this.state = {
      checked: false
    };
  }
  check () {
    this.setState({ checked: !this.state.checked });
  }

  delete () {
    axios.delete(`http://localhost:8080/tasks/${this.props.item.id}`).then(response => {
      console.log(response);
      this.props.getTodos();
    });
  }

  render () {
    return (
      <div className='card'>
        <Card>
          <CardBody>
            <CardTitle><h2>{this.props.item.name}</h2></CardTitle>
            <CardText>{this.props.item.message}</CardText>
          </CardBody>
          <Button color='primary' onClick={this.check.bind(this)}>{this.state.checked ? 'Checked' : 'Check'}</Button>
          <Button color='danger' onClick={this.delete.bind(this)}>Delete</Button>
        </Card>
      </div>
    );
  }
}

export default TodoItem;
