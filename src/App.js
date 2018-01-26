import React, { Component } from 'react';
import Page from './components/page';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Page />
    );
  }
}

export default App;
