import React, { useState } from "react";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(["component"]);
  const [newTodo, setnewTodo] = useState();

  const changeInputData = (e) => {
    setnewTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData}></input>
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} />
    </div>
  );
}

export default App;
