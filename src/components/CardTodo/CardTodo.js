import React, { Component } from 'react';
import './cardTodo.scss';

class CardTodo extends Component {
  render() {
    let { info } = this.props;
    return(
      <div className='cardTodo'>
        <p className='cardTodo_content'>{ info.taskName }</p>
      </div>
    );
  }
}

export default CardTodo;
