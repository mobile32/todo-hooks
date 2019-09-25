import React from "react";
import styled from "styled-components";

import { useAddTodo } from "../todoHooks";

const Form = styled.form`
  margin: 20px 0;
`;

const AddEdit = () => {
  const [todo, setTodo, save] = useAddTodo();

  return (
    <Form
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
    </Form>
  );
};

export default AddEdit;
