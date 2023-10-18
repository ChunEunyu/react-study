import React, {useState} from 'react';
import img from './nsg1.jpg'
import './App.css';
import {BiHeart} from 'react-icons/bi';
import {BiSolidHeart} from 'react-icons/bi';
import {BsPersonCircle} from 'react-icons/bs';

function App() {

  const [heart, setHeart] = useState(false);
  const click_heart = () => {
    setHeart(!heart);
  }
  const heart_style = {
    width : "30px",
    height : "30px"
  }
  const person_style = {
    width : "25px",
    height : "25px"
  }

  return (
    <div className='body'>
      <div className='item'>
        <div className='profile'>
          <BsPersonCircle style={person_style}></BsPersonCircle>
          <p>[77] </p>
          <p className='nickname'> mixiニュシギ </p>
        </div>
        <p className='time'>4時間前</p>
        <p className='main_text'>昼休憩にサツマイモを食べました。<br />
          美味しかったです。美味しかったです。</p>
        <img className='img' src={img}></img>
        <div className='heart' onClick={click_heart}>
          {heart? (
            <button className='btn'>
              <BiHeart style={heart_style} color='#83c3dc'></BiHeart>
            </button>
          )
          :
          (<button className='btn'>
            <BiSolidHeart style={heart_style} color='#83c3dc'></BiSolidHeart>
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
