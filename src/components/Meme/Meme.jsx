import { React, useState }from 'react';
import "./Meme.css";
import memesData from '../../memesData';


const Meme = () => {

  

  const [memeImage, setMemeImage] = useState(" ")

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <main className="meme-container">
        <div className="form">
          <input type="text" className="form-input" placeholder="Top text"></input>
          <input type="text" className="form-input" placeholder="Bottom text"></input>
          <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>

        <img src={memeImage} alt="" className="meme-img"/>
    </main>
  )
}

export default Meme;