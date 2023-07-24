import React from "react";
import "./TodoItem.css";
import { TodoIcon } from "../TodoIcon/TodoIcon";

function TodoItem(props) {
  const onComplete = () => {
    const updatedTodos = props.todos.map((todo) => {
      if (todo.text === props.text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    props.onComplete(updatedTodos);
  };
  const onDelete = () => {
    props.onDelete(props.index);
  };

  return (
    <li className="TodoItem">
      <TodoIcon
        type="checkmark"
        onClick={onComplete}
        completed={props.completed}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>

      <TodoIcon type="delete" onClick={onDelete} />
    </li>
  );
}

export { TodoItem };
