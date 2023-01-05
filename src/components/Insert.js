import '@google/model-viewer'
import '../App.css'
import {firebase, initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage, ref, listAll, uploadBytesResumable, deleteObject} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
import { useState, useEffect } from 'react';
import { ModelViewerElement } from '@google/model-viewer';


function Insert ({storage, database, modelRef, models, allItems, display, setDisplay, setModels, setAllItems}) {

  const [input, setInput] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const displayList = models.map((m, index) => {
    
    return (
        <div>
          <button className='App-button'>X</button>
          <div className='card' id={index}>
            <model-viewer
            src={m}
            poster='./piranalogo.png'
            camera-controls
            auto-rotate
            autoplay='true'
            ></model-viewer>
          </div>
        </div>
  )
  });


  const handleUpload = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if (!file) return;

    const storageRef = ref(storage, `gs://view-5a6a6.appspot.com/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      }
    );
  }

  function handleDelete () {
    const deleteRef = ref(storage, ``);
    deleteObject(deleteRef).then(() => {

    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <div>
      {/* { models.length &&  */}
      <>
        <div>
          <form onSubmit={handleUpload} className='form'>
          <input type='file' className='App-input'/>
          <button type='submit' className='App-button'>Upload</button>
          </form>
          {
            !input &&
            <div className='outerbar'>
              <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
            </div>
          }
          {
            input &&
            <img src={input} alt='uploaded file' height={200} />
          }
        </div>
        {displayList}
    </>
{/* } */}
    </div>
  )
    
}

export default Insert;