import React, { useState} from 'react';
import List from './List';

function App() {

  const [todos, setTodos] = useState(['component'])
 

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form action=''>
        <input type="text" name="" ></input>
        <button>명령어추가</button>
      </form>
      <List todos={todos}/>
    </div>
  );
}

export default App;