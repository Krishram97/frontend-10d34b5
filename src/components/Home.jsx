import React from 'react'
import {
    Card,
    Typography
} from '@material-tailwind/react'

function Home() {
  return (
    <div
      class="image"
      style={{
        height: "500px",
        width: "600px",
        backgroundImage: `url(${require('../Assets/img/creative.jpg')})`, // Use require to specify the image path
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Set background size to cover
      }}
    >
      <Typography color="gray" className="font-normal">
       NONE - STARTED
      </Typography>
      <Card>
      
      </Card>
    </div>
  )
}

export default Home