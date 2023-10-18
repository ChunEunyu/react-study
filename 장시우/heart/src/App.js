import { React, useState } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function App() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <button className="primary__button">Log in</button>
            <button className="text__button">Sign up</button>
          </div>
        </div>
      </div>
      <div style={{ margin: "100px" }}>
        <img
          className="testImg"
          src="https://i.postimg.cc/gkL8Mfng/crap.jpgImage"
          style={{ width: "400px" }}
        ></img>
        <div onClick={() => setClicked1(!clicked1)}>
          {clicked1 ? (
            <AiFillHeart
              class="btn2"
              style={{ width: "80px", height: "80px" }}
            ></AiFillHeart>
          ) : (
            <AiOutlineHeart
              class="btn1"
              style={{ width: "80px", height: "80px" }}
            ></AiOutlineHeart>
          )}
        </div>
        <div className="timeline" style={{ width: "400px", height: "100px" }}>
          <Post
            username="siwooJang"
            caption="This is tasty Korea Spicy Marinated Crab!"
          />
        </div>
      </div>
      <div style={{ margin: "100px" }}>
        <img
          className="testImg"
          src="https://i.postimg.cc/L8pnMVkp/korea4.webp"
          style={{ width: "400px" }}
        ></img>
        <div onClick={() => setClicked2(!clicked2)}>
          {clicked2 ? (
            <AiFillHeart
              class="btn2"
              style={{ width: "80px", height: "80px", top: "750px" }}
            ></AiFillHeart>
          ) : (
            <AiOutlineHeart
              class="btn1"
              style={{ width: "80px", height: "80px", top: "750px" }}
            ></AiOutlineHeart>
          )}
        </div>
        <div className="timeline" style={{ width: "400px", height: "100px" }}>
          <Post
            username="jonghoKim"
            caption="This is wonderful korea festival!"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
