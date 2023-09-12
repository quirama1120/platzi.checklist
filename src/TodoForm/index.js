import React from "react";

import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label> Agrega tu nuevo TODO </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Estudiar REACT con PLATZI"
        onKeyDown={onKeyDown}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
        >
          Agregar
        </button>
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
