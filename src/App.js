import './App.css'
import VideoPlayer from './components/VideoPlayer'
import Piechart from './components/Piechart'
import TablePanel from './components/TablePanel'

const App=()=>(
<div className='dashBoard-bg'>
  <div className='heading-container'>
    <h1>Fournine DashBoard</h1>
  </div>
  <hr/>
  <div className='video-piechart-container'>
    <VideoPlayer/>  
      <Piechart/>
  </div>
  <div>
     <TablePanel/>
  </div>
     
</div>
)

export default App



