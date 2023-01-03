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
    measurementId: "G-SW50LTRLHN"
  });

function Insert () {
  //Firebase References
  const storage = getStorage(firebaseConfig);
  const database = getDatabase(firebaseConfig);
  const [modelRef, setModelRef] = useState();
  const [modelList, setModelList] = useState();
  const [model, setModel] = useState();

  useEffect(() => {
    getDownloadURL(ref(storage, 'gs://view-5a6a6.appspot.com/harimau.glb'))
    .then((url) => {
      setModelRef(url)

      //Model Display Setup
      let models = [];
    
      models.map((m) => {
      
        return (
            <div><model-viewer
              className='card'
              src={`${modelRef}`}
              camera-controls
              auto-rotate
              autoplay='true'
            ></model-viewer></div>
      )
      });

      setModelList(models)
    })
    .catch((error) => {
    });
  }, [])

  console.log(modelList)
  console.log(modelRef)
  console.log(model)

  return (
    <div>
      <div>
        <input></input>
        <input></input>
        <input></input>
        <button></button>
      </div>
      <div className='card'>{modelList}</div>
    </div>
  )

}

export default Insert;