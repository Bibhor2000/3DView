import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Insert from './components/Insert';
import Docs from './components/Docs';
import { Link, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Model/> */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Insert'>Insert Models</Link>
        <Link to='/Docs'>Model Docs</Link>
      </div>
      <Routes>
        <Route path='/Insert' element={<Insert/>}/>
        <Route path='/Docs' element={<Docs/>}/>
      </Routes>
    </div>
  );
}

export default App;
