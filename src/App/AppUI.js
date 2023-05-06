import React from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { Skeleton } from "../Skeleton";
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    removeTodoItem,
    onComplete: handleComplete,
    todos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desesperáte, hubo un error...</p>}
        {loading && [1, 2, 3, 4].map((n) => <Skeleton key={n} />)}
        {!loading && !searchedTodos.length && (
          <p className="no-todos-message">
            ¿Cuáles son las tareas <br /> del día de hoy?
          </p>
        )}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => removeTodoItem(index)}
            onComplete={handleComplete}
            todos={todos}
          />
        ))}
      </TodoList>
      
      
      {!!openModal && (
        <Modal isOpen={openModal}>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
