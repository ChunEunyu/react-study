import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  // 서버 구현시 사용 예정
  // const fetchData = async () => {
  //   const response = await axios.get("");
  //   setTodos(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <h1>To Do List 만들기</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="입력하세요"
          onChange={onChange}
          value={toDo}
        />
        <button>등록하기</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
