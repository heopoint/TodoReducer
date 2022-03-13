import React from 'react'

function List({todos}) {
 
  return (
    <ul>
    {todos.map(todo=><li>{todo}</li>)}
    </ul>
  )
}

export default List