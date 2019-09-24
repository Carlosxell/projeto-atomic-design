import React, { Component } from 'react';
import { connect } from 'react-redux';
import './checkBox.scss';
import { handleTodoStatus } from "../../actions";

class CheckBox extends Component {
  changeStatus() {};

  render() {
    let { data } = this.props;

    return(
      <label className='checkBox' htmlFor={ this.props.name }>
        <input className={ `checkBox_input${!data.active ? ' checked' : ''}` }
               onChange={ () => this.props.changeTodoStatus({ ...data, active: !data.active }) }
               id={ this.props.name }
               checked={ !data.active }
               name={ this.props.name }
               type="checkbox"
               value={ data.active } />
        <span className='checkBox_text'>{ this.props.label }</span>
      </label>
    );
  }
}

const mapStateToProps = store => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({
  changeTodoStatus: (obj) => dispatch(handleTodoStatus(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
