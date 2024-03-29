import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";



function UseTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizedTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  
  

  const addTodo = (text) => {
    if (text.trim().length === 0) {
      return;
    }
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      priority: "low"
    });
    saveTodos(newTodos);
  };
  
  function removeTodoItem(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const onComplete = (updatedTodos) => {
    saveTodos(updatedTodos);
  };

  

  return {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    removeTodoItem,
    todos,
    onComplete,
    openModal,
    setOpenModal,
    addTodo,
    sincronizedTodos,
  };
}

export { UseTodos };
