# 3D-View App
### Creator:
Bibhor Gurung


## Project Links
- [Deployed Front-end](https://3d-view.vercel.app/)


## Technologies used for this app
- [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)]()
- [![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/)
- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)]()


### Deployment Service:
![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge) 


## Project Overview

| Directories | Description | 
| --- | :---: |  
| Components | This directory currently holds two files Docs and Insert, Docs will contain instructions and any information regarding the app and Insert is where you an view and insert your 3D models  | 


### Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| AppJS | H | 8hrs| 56hrs(Initially setup was done in InsertJS) | 56hrs |
| InsertJS | H | 8hrs | 2hrs | 58hr |
| DocsJS | H | 1hr | 1hr | 59hrs | 
| Total | H | 17hrs| 59hrs | 59hrs |


## Issues and Resolutions
- The issue below was caused by cors not being set properly on the cloud storage terminal/editor. 
<img width="513" alt="Screen Shot 2022-12-29 at 6 05 00 PM" src="https://user-images.githubusercontent.com/108837222/211030259-85a2cb12-6c69-472f-83b8-fc5e2ec27083.png">

- The issue below was one of many encountered when trying to map out any 3D files that were stored in the cloud storage. This was solved by setting the right path using the correct storage bucket name. 
<img width="480" alt="Screen Shot 2023-01-03 at 2 24 31 PM" src="https://user-images.githubusercontent.com/108837222/211030853-ea7fdb23-6f76-431f-9d83-cd55e76059bb.png">


## Installation
1. Fork and clone this repository
2. `cd` into that repository
3. Run `npm i` to download all required dependencies
4. Run `npm start` to run localhost


## Project Sketches
Wireframe:
![PXL_20221222_212120500](https://media.git.generalassemb.ly/user/45902/files/13b6fe3e-4a02-43e1-97ae-92d1e473cf33)
ERD & Req/Res Diagram:
![PXL_20221222_212103487](https://media.git.generalassemb.ly/user/45902/files/7f67b533-3adc-4edd-8a70-f921332a1ccf)
Component Hierarchy:
![PXL_20221222_212111733](https://media.git.generalassemb.ly/user/45902/files/0232ecb5-e2be-4dda-a0be-59b8d21c93ea)


## MVPs for this Project
- Functionality for displaying model files from the cloud storage
- Functionality for inserting any custom models from the user's end
- Functionality for drag, & zoom gestures for viewing displayed models


### Code Snippet (For our seed file)

```
const displayList = models.map((m, index) => {
  
        return (
          <div>
            <button className='App-delete-button' onClick={handleDelete}>X</button>
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
```


## What to add in the future...
- Adding support for additional model file types (.stl, .fbx, etc..).
- Adding user auth for the site when users insert any of their own 3d models it will be under their name and can only be edited/deleted by that user.
- Adding a responsive design to the app.


## Used Resources:
- [Upload Function from Firebase](https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/)
- [Object Life Cycle Management Delete from Firebase](https://stackoverflow.com/questions/39316829/object-lifecycle-management-firebase-storage)
- [Gradient Background](https://codeconvey.com/css-background-linear-gradient-animation/)
- [Title CSS Animation](https://codeconvey.com/css-text-animation-examples-with-code/)