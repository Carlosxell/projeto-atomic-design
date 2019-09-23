import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTodo } from '../../actions/index';
import './formAdd.scss'

class FormAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    this.setState({ taskName: e.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault();

    if(this.state.taskName.length) {
      let { todos } = this.props;
      let id = todos && todos.length ? todos[(this.props.todos.length -1)].id + 1 : 1;
      this.props.addTodo({ taskName: this.state.taskName, id, active: true });
    }

    this.setState({ taskName: '' });
  }

  render() {
    return(
      <div className='formAdd'>
        <form className='formAdd_grid'
              autoComplete='off'
              onSubmit={ this.handleSubmit }>
          <div className='formAdd_grid_item'>
            <div className='formGroup'>
              <label className='label' htmlFor='taskName'>Task Name</label>
              <input onChange={ this.changeName }
                     className='input'
                     id='taskName'
                     name='taskName'
                     placeholder='Ex: Go out to run'
                     type='text'
                     value={ this.state.taskName } />
            </div>
          </div>

          <div className='formAdd_grid_item'>
            <div className='formGroup'>
              <button className='btn btn--primary btn--block' type='submit' onClick={ (e) => this.handleSubmit(e) }>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(handleAddTodo(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
