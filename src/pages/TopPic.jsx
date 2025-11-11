import React from 'react'
import topPic from '../assets/IMG_20240513_131143_913.jpg';

export default function TopPic() {
  return (
    <div style={{ height:'50px'}}>
      <img alt='top_pic' src={topPic} style={photo}/>
    </div>
  )
}

const photo ={
    width:"100vw",
    height:'50px',
}
