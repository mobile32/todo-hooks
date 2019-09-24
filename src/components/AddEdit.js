import React from "react";

import { useAddTodo } from "../todoHooks";

const AddEdit = () => {
  const [todo, setTodo, save] = useAddTodo();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        save();
      }}
    >
      <input
        type="text"
        id="todo"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default AddEdit;
