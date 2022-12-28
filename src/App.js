import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Model from './components/Model';
import storage from './firebase/firebase';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Model/>
    </div>
  );
}

export default App;
