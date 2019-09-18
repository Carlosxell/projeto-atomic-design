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

  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.taskName.length) return;
    this.props.addTodo({ taskName: this.state.taskName, id: 1, active: false });
    console.info('entrou no submit');
  }

  render() {
    return(
      <form autoComplete='off'
            className='formAdd'
            onSubmit={ (e) => this.handleSubmit(e) }>
        <div className='formAdd_grid'>
          <div className='formAdd_grid_item'>
            <div className='formGroup'>
              <label className='label' htmlFor='taskName'>Task Name</label>
              <input onChange={ (e) => this.changeName(e) }
                     className='input'
                     id='taskName'
                     name='taskName'
                     placeholder='Ex: Go out to run'
                     type='text' value={ this.taskName } />
            </div>
          </div>

          <div className='formAdd_grid_item'>
            <div className='formGroup'>
              <button className='btn btn--primary btn--block' type='submit'>Add</button>
            </div>
          </div>
        </div>
        { this.props.todos.map(val => (<span>{ val.taskName }</span>)) }
      </form>
    );
  }
}

const mapStateToProps = store => ({ todos: store.todos.list });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(handleAddTodo(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);
