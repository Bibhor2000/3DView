import '@google/model-viewer'
import '../App.css'
//testing push
const Model = () => (
    <div className='card'>
        <model-viewer
          src='/egx.glb'
          ios-src=''
          poster=''
          alt=''
          shadow-intensity=''
          camera-controls
          auto-rotate
        ></model-viewer>
    </div>
)

export default Model;