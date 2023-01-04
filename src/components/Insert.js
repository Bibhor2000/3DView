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
// const firebaseConfig = initializeApp ({
//     apiKey: "AIzaSyCKQjC4-WYtuAEQDtR5LRYGl2h3wVjj5bg",
//     authDomain: "view-5a6a6.firebaseapp.com",
//     databaseURL: "https://view-5a6a6-default-rtdb.firebaseio.com",
//     projectId: "view-5a6a6",
//     storageBucket: "view-5a6a6.appspot.com",
//     messagingSenderId: "916014327766",
//     appId: "1:916014327766:web:07cd0a3b03c72616e9e677",
//     measurementId: "G-SW50LTRLHN",
//     rules_version: "2"
//   });

function Insert ({storage, database, modelRef, models, allItems, display, setDisplay, setModels, setAllItems}) {

  console.log(models)
  const storageRef = ref(storage, 'gs://view-5a6a6.appspot.com/')
  const [input, setInput] = useState();

  const displayList = models.map((m, index) => {
    console.log(m)
    return (
        <div>
          <div>{m}</div>
          <div className='card' id={index}>
            <model-viewer
            // className='card'
            src={m}
            poster='./piranha.jpeg'
            camera-controls
            auto-rotate
            autoplay='true'
            ></model-viewer>
          </div>
        </div>
  )
  });

  // function handleUpload () {
  //   uploadBytes(storageRef, file).then((snapshot) => {
  //     console.log('Uploaded a blob or file!');
  //   });
  // }

  // function handleDelete () {
  // }

  return (
    <div>
      {/* { models.length &&  */}
      <><div>
          <input className='input'></input>
          <input className='input'></input>
          <input type='file' className='input'></input>
          <button></button>
        </div>
        {/* <div className='card'>
        {displayList}
        </div> */}
        {displayList}
        {/* <div className='card'>
        <model-viewer
        className='card'
        src={models[0]}
        camera-controls
        auto-rotate
        autoplay='true'
    ></model-viewer>
    </div>
    <div className='card'>
        <model-viewer
        className='card'
        src={models[1]}
        camera-controls
        auto-rotate
        autoplay='true'
    ></model-viewer>
    </div>
    <div className='card'>
        <model-viewer
        className='card'
        src={models[2]}
        camera-controls
        auto-rotate
        autoplay='true'
    ></model-viewer>
    </div> */}
    </>
{/* } */}
    </div>
  )
    
}

export default Insert;