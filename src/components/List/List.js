import React, { Component } from 'react';
import CardTodo from '../../components/CardTodo/CardTodo';
import { connect } from 'react-redux';
import './list.scss';

class List extends Component {
  render() {
    let { todos } = this.props;
    return(
      <div className='listBox'>
        <p>{ JSON.stringify(this.props) }</p>
        { todos.map(val => (<CardTodo key={ val.id } info={ val } />)) }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
