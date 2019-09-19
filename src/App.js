import React, { Component } from 'react';
import Header from './components/Header';
import FormAdd from './components/FormAdd/FormAdd';
import List from './components/List/List';
import { connect } from 'react-redux';
import './sass/app.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='app'>
        <Header title={ 'App With Atomic Design, SASS and React' } />

        <div className='app_content'>
          <FormAdd />

          <List />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
