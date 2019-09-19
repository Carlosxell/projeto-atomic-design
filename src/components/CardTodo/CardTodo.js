import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cardTodo.scss';

class CardTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { info } = this.props;
    return(
      <div className='cardTodo'>
        <p className='cardTodo_content'>{ info.taskName }</p>
      </div>
    );
  }
}

const mapStateToProps = store => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardTodo);
