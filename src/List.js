import React from 'react'

function List({todos}) {
 
  return (
    <ul>
    {todos.map(todo=><li>{todo.title}</li>)}
    </ul>
  )
}

export default List