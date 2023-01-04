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

function Insert () {
  //Firebase References
  const storage = getStorage(firebaseConfig);
  const database = getDatabase(firebaseConfig);
  const [modelRef, setModelRef] = useState();
  const [models, setModels] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState();

  let modelArray = [];

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
        //All items 
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
      setDisplay(models[0])
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

  }, [])

  

  console.log(models, 'this is model state')
  console.log(modelArray, 'this is the model array')
  // const viewModel = models.map((url) => {
  //   console.log(url)
  //   return (
  //   <div><model-viewer
  //   className='card'
  //   src={url}
  //   camera-controls
  //   auto-rotate
  //   autoplay='true'
  //   ></model-viewer></div>
  // )
  // })

  // console.log(modelList)
  // console.log(modelRef)
  // console.log(model)
  console.log(modelArray[0])
  return (
    <div>
      {/* { models.length &&  */}
      <><div>
          <input></input>
          <input></input>
          <input></input>
          <button></button>
          {/* {models.map((url) => {
    <div><model-viewer
    className='card'
    src={url}
    camera-controls
    modelCach
    auto-rotate
    autoplay='true'
    ></model-viewer></div>
  })} */}
        {/* {viewModel} */}
        </div>
        {models.map((model, index) => {
          return(
            <button onClick={(event)=>{event.preventDefault()
            setDisplay(model)}}>{index}</button>
          )
        })}
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