import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca tu tarea"
      value={searchValue}
      onChange={handleSearchInputChange}
    ></input>
  );
}

export { TodoSearch };
