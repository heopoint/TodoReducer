import React from "react";

function List({ todos, loading }) {
  let todoList = <div>Loading....</div>;
  if (!loading) {todoList = todos.map((list) => <li key={list.id}>{list.title}</li>)};
  return <ul>{todoList}</ul>;
}

export default List;
