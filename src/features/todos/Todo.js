import React from "react";
import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice";
function Todo({ todo: { id, text } }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(todoRemoved(id));
  }

  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
}
export default Todo;
