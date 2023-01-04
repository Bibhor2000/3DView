import '@google/model-viewer'
import '../App.css'
import {firebase, initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage, ref, listAll} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
import { useState, useEffect } from 'react';
import { ModelViewerElement } from '@google/model-viewer';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function Insert ({storage, database, modelRef, models, allItems, display, setDisplay, setModels, setAllItems}) {

  useEffect(() => {
    //Model Display Setup
    let listRef = ref(storage, 'gs://view-5a6a6.appspot.com/')
    let urlList = []
    let buttonList = []

    //Model Mapping Setup
    listAll(listRef)
    .then((res) => {
      // console.log(res)
      setAllItems(res.items)
      console.log(res.items, 'this res items')
      console.log(allItems, 'allItems array')
      res.items.forEach((itemRef) => {
        // console.log(itemRef)
        getDownloadURL(ref(storage, itemRef))
        .then((url) => {
          console.log(url, 'model url')
          urlList.push(url)
          // setModels(url, ...models)
          
    })
    
    .catch((error) => {
    });
      })
      console.log(urlList, 'url List')
      setModels(urlList)
      setDisplay(models)
    })
    // console.log(listRef)
    // setLoaded(true)

  //   let shipLink = getDownloadURL(ref(storage, 'gs://view-5a6a6.appspot.com/egx.glb'))
  // .then((url) => {
  //   // console.log(url)
  //   setModelRef(url)
  // })
  // .catch((error) => {
  // });
  console.log('useEffect running')

  }, [])

  const buttons = models.map((model, index) => {
    return(
      <button onClick={(event)=>{event.preventDefault()
      setDisplay(models)}}>{index}</button>
    )
  })

  
  console.log(models, 'this is model state')
  // console.log(modelList)
  // console.log(modelRef)
  // console.log(model)
  console.log(display)

  return (
    <div>
      {/* { models.length &&  */}
      <><div>
          <input></input>
          <input></input>
          <input></input>
          <button></button>
        </div>
        <div>{buttons}</div>
        <div className='card'>
        <model-viewer
        className='card'
        src={display}
        camera-controls
        auto-rotate
        autoplay='true'
    ></model-viewer></div>
    </>
{/* } */}
    </div>
  )
    
}

export default Insert;