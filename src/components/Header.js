import React, { Component } from 'react';
import '../sass/organisms/_header.scss';

class Header extends Component {
  render() {
    return(
      <header className='header'>
        <div className='header_box'>
          { this.props.title ? <h1 className='header_title'>{ this.props.title }</h1> : '' }
        </div>
      </header>
    );
  }
}

export default Header;
