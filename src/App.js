import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import FormSiswa from './siswa/FormSiswa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FormSiswa/>
      </div>
    );
  }
}

export default App;
