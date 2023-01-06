import '@google/model-viewer'
import '../App.css'
import {firebase, initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage, getMetadata, ref, listAll, uploadBytesResumable, deleteObject} from 'firebase/storage';
import {getDatabase} from 'firebase/database';
import { useState, useEffect } from 'react';
import { ModelViewerElement } from '@google/model-viewer';


function Insert ({storage, database, modelRef, models, allItems, display, setDisplay, setModels, setAllItems}) {

  const [input, setInput] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const displayList = models.map((m, index) => {
  
        return (
          <div>
            <button className='App-delete-button' onClick={handleDelete}>X</button>
            <div className='card' id={index}>
              <model-viewer
              src={m}
              poster='./firebaselogo.png'
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

    const db = getDatabase()
    // Get a reference to the location of the files you want to list
    let filesRef = ref(db).child('/');
    console.log(filesRef)
    // Use the once() method to get the list of files
    listAll(filesRef)
      .then((res) => {
      console.log(res,'res')
    res.items.forEach((itemRef) => {
      console.log(itemRef)
    });
    }).catch((error) => {
      console.log(error)
    });

    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, 'gs://view-5a6a6.appspot.com/assegai');

    // Delete the file
    deleteObject(desertRef).then(() => {
    // File deleted successfully
    }).catch((error) => {
    // Uh-oh, an error occurred!
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