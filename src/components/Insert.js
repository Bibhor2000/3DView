import '@google/model-viewer'
import '../App.css'
import {firebase, initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage, ref} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
import { useState } from 'react';

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
  const [shipRef, setShipRef] = useState();

  let shipLink = getDownloadURL(ref(storage, 'gs://view-5a6a6.appspot.com/harimau.glb'))
  .then((url) => {
    setShipRef(url)
  })
  .catch((error) => {
  });

  return (
    <div>
      <div>
        <input></input>
        <input></input>
        <input></input>
        <button></button>
      </div>
      <div>
          <model-viewer
            className='card'
            src={`${shipRef}`}
            ios-src=''
            poster=''
            alt=''
            shadow-intensity=''
            camera-controls
            auto-rotate
          ></model-viewer>
      </div>
    </div>
  )

}

export default Insert;