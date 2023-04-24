import ReactPlayer from 'react-player'

import './index.css'

const videoURL = "https://youtu.be/6RqA_knCkYg"
const VideoPlayer = () => (
  <div className="video-container">
    <div className="responsive-container">
      <ReactPlayer url={videoURL} width='100%' height='100%' border-radius="15px" border-style="solid"/>
    </div>
  </div>
)

export default VideoPlayer