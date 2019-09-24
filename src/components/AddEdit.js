import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { GET_TODOS, ADD_TODO } from "../queries";

const AddEdit = () => {
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update(
      cache,
      {
        data: { createTodo }
      }
    ) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [createTodo, ...todos] }
      });
    }
  });
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo({ variables: { task: todo } });
        setTodo("");
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
