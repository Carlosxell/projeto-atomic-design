import React, { Component } from 'react';
import Header from './components/Header';
import Home from './views/Home';
import './sass/app.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='app'>
        <Header title={ 'App With Atomic Design, SASS and React' } />

        <div className='app_content'>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
