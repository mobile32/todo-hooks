import React from "react";
import PropTypes from "prop-types";

import { useGetTodo, useFinishTodo, useDeleteTodo } from "../todoHooks";

const TodoList = () => {
  const [finishTodo] = useFinishTodo();
  const [deleteTodo] = useDeleteTodo();
  const { loading, error, data } = useGetTodo();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => finishTodo({ variables: { id: todo.id } })}
        >
          {todo.done ? (
            <>
              <strike>{todo.task}</strike>
              <button
                onClick={() => {
                  deleteTodo({ variables: { id: todo.id } });
                }}
              >
                X
              </button>
            </>
          ) : (
            <div>{todo.task}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default TodoList;
