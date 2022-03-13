import './App.css'
import React, { useState, useEffect} from 'react';
import List from './List';

function App() {

  const [todos, setTodos] = useState(['component'])
  const [newTodo, setnewTodo] = useState()
  
  const changeInputData = (e) => { 
    setnewTodo(e.target.value)
   }
   const addTodo = (e) => { 
     e.preventDefault()
     setTodos([...todos,newTodo])
    }
    const fetchInitialData = async() => {
      const response= await fetch('http://localhost:5000/todo')
      const initialData=await response.json()
      console.log(initialData)
      setTodos(initialData)
    }
  useEffect(() => {
    fetchInitialData()
  }, [])
  //계속랜더링 되는걸 관찰해라
  //로링 타이밍에 한번 실행
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form action=''>
        <input type="text" name="" onChange={changeInputData}></input>
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos}/>
    </div>
  );
}

export default App;