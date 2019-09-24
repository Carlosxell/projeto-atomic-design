import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeleteTodo } from "../../actions";
import CheckBox from '../CheckBox/CheckBox';
import './cardTodo.scss';

class CardTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { info } = this.props;

    return(
      <div className={ `cardTodo${!info.active ? ' finished' : ''}` }>
        <button className='btn cardTodo_closeBtn' type='button' onClick={ () => this.props.deleteTodo(info) }>X</button>
        <div className='cardTodo_content'>
          <div className="cardTodo_grid">
            <div className="cardTodo_grid_check">
              <CheckBox data={ info } label={ '' } name={ info.id } />
            </div>

            <div className="cardTodo_grid_content">
              <h3 className='cardTodo_content_title'>{ info.taskName }</h3>
            </div>
          </div>
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
