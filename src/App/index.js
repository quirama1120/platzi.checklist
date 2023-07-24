// import './App.css';
import React from "react";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { UseTodos } from "./UseTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodoError } from "../TodoError/TodoError";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptyResults } from "../EmptyResults/EmprtyResults";
import { ChangeAlertWithStorageListener } from '../ChangeAlert'

function App() {
  const {
    error,
    loading,
    searchedTodos,
    removeTodoItem,
    onComplete: handleComplete,
    todos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizedTodos,
  } = UseTodos();

  return ( 
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText = {searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText)=> <EmptyResults searchText={searchText}/>}
        render={(todo, index) => {
      return (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onDelete={() => removeTodoItem(index)}
          onComplete={handleComplete}
          todos={todos}
        />
      );
    }
    
  }
/>

      {!!openModal && (
        <Modal isOpen={openModal}>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener sincronize= {sincronizedTodos} loading={loading}/>
    </React.Fragment>
  );
}

export default App;
