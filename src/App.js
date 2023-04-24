import './App.css'
import VideoPlayer from './components/VideoPlayer'
import PieChart from './components/Piechart'

const App=()=>(
<div className='dashBoard-bg'>
  <div className='heading-container'>
    <h1>Fournine DashBoard</h1>
  </div>
  <hr/>
  <div className='video-piechart-container'>
    <VideoPlayer/>  
    <PieChart/>
  </div>
     
</div>
)

export default App



