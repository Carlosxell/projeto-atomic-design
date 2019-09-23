import React, { Component } from 'react';
import FormAdd from '../components/FormAdd/FormAdd';
import CardTodo from "../components/CardTodo/CardTodo";
import { connect } from "react-redux";

class Home extends Component {

  filterList() {}

  render() {
    return(
      <div className='page--home'>
        <FormAdd />

        { this.props.todos.map(val => (<CardTodo key={ val.id } info={ val } />)) }
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
