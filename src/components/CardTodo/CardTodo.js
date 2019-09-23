import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cardTodo.scss';
import { handleDeleteTodo } from "../../actions";

class CardTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { info } = this.props;

    return(
      <div className='cardTodo'>
        <button className='btn cardTodo_closeBtn' type='button' onClick={ () => this.props.deleteTodo(info) }>X</button>
        <div className='cardTodo_content'>
          <h3 className='cardTodo_content_title'>{ info.taskName }</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (obj) => dispatch(handleDeleteTodo(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardTodo);
