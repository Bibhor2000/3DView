import logo from './logo.svg';
import './App.css';
import {initializeApp} from 'firebase/app';
import firebase from 'firebase/compat/app';
import {getDownloadURL, getStorage, ref, listAll} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore/lite';
import {getDatabase} from 'firebase/database';
import { useState, useEffect } from 'react';
import React, {Component} from 'react';
import Insert from './components/Insert';
import Docs from './components/Docs';
import { Link, Route, Router, Routes} from 'react-router-dom';

const firebaseConfig = initializeApp ({
  apiKey: "AIzaSyCKQjC4-WYtuAEQDtR5LRYGl2h3wVjj5bg",
  authDomain: "view-5a6a6.firebaseapp.com",
  databaseURL: "https://view-5a6a6-default-rtdb.firebaseio.com",
  projectId: "view-5a6a6",
  storageBucket: "view-5a6a6.appspot.com",
  messagingSenderId: "916014327766",
  appId: "1:916014327766:web:07cd0a3b03c72616e9e677",
  measurementId: "G-SW50LTRLHN",
  rules_version: "2"
});


function App() {

  const storage = getStorage(firebaseConfig);
  const database = getDatabase(firebaseConfig);
  const [modelRef, setModelRef] = useState();
  const [models, setModels] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState();

  async function modelDownload () {
    let listRef = ref(storage, 'gs://view-5a6a6.appspot.com/')
    let urlList = []

    listAll (listRef)
    .then((res) => {
      setAllItems(res.items)
      res.items.forEach((itemRef) => {
        getDownloadURL(ref(storage, itemRef))
        .then((url) => {
          urlList.push(url)
          setLoaded(true)
          setModels(urlList)
          setDisplay(models)
      })
    })
  })}

  useEffect(() => {modelDownload()}, [loaded])

  return (
    <div className="App">
      <div>
        <Link to='/' className='App-link'>Home</Link>
        <Link to='/Insert' className='App-link'>Insert Models</Link>
        <Link to='/Docs' className='App-link'>Model Docs</Link>
      </div>
      <div className='container'>
        <div className='animate one'>
          <span>3</span><span>D</span><span>M</span><span>o</span><span>d</span><span>e</span><span>l</span><span>V</span><span>i</span><span>e</span><span>w</span><span>e</span><span>r</span>
        </div>
      </div>
      <Routes>
        <Route path='/Insert' element={<Insert storage={storage} database={database} modelRef={modelRef} models={models} allItems={allItems} display={display} setDisplay={setDisplay} setModels={setModels} setAllItems={setAllItems}/>}/>
        <Route path='/Docs' element={<Docs/>}/>
      </Routes>
    </div>
  );
}

export default App;
