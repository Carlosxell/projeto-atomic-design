import React, { Component } from 'react';
import Header from './components/Header';
import FormAdd from './components/FormAdd/FormAdd';
import './sass/app.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header title={ 'App With Atomic Design, SASS and React' } />

        <div className='app_content'>
          <FormAdd />
        </div>
      </div>
    );
  }
}

export default App;
