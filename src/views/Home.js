import React, { Component } from 'react';
import FormAdd from '../components/FormAdd/FormAdd';
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return(
      <div className='page--home'>
        <FormAdd />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
