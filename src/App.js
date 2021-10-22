import React, { useState } from 'react';
import './App.css';
import imagesArr from './imageData';
import CityGrid from './CityGrid';

export default function App() {

  const [bigImage, setImage] = useState(imagesArr[0].img)
  console.log(bigImage)

  const handleChange = (image) => {
    setImage(image)
  }

  const cities = imagesArr.map((ele, index) => {
    return (
      <div onClick={() => handleChange(ele.img)}>
        <CityGrid
        {...ele}
        key={index}
      />
      </div>
      
    )
  })
  return (
    <div className="App">
      <h1>Cities Of The World</h1>

      <div id="wrapper">
        <div id="thumbnails">
          {cities}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
    </div>
  )
}



