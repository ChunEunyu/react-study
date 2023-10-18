import React, { useState } from 'react';
import img from './음식.jpeg';
import './App.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

function App() {
  const [heart, setHeart] = useState(false);
  const handleClick = ()=>{
    setHeart(!heart);
  }
  const style= {
    width : "50px",
    height : "50px"
  }
  return (
    <div className="App">
      <img className='img'src={img}></img>
      <h3>맛있는 파스타 | 오징어 듬뿍</h3>
      <h1>11,000원</h1>
      <div className='heart' onClick={handleClick}>
        {
          heart? (<button className='btn'><AiOutlineHeart style={style}/></button>):
          (<button className='btn'><AiFillHeart style={style}/></button>)
        }
      </div>
    </div>
  )
}

export default App;
