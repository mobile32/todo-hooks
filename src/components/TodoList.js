import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useGetTodo, useFinishTodo, useDeleteTodo } from "../todoHooks";

const Wrapper = styled.div`
  align-items: flex-start;
  border: 2px solid #50507b;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Text = styled.div`
  max-width: 500px;
  min-width: 0;
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StrikedText = styled(Text)`
  text-decoration: line-through;
`;

const TodoList = () => {
  const [finishTodo] = useFinishTodo();
  const [deleteTodo] = useDeleteTodo();
  const { loading, error, data } = useGetTodo();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Wrapper>
      {data.todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => finishTodo({ variables: { id: todo.id } })}
        >
          {todo.done ? (
            <Item>
              <StrikedText>{todo.task}</StrikedText>
              <button
                onClick={() => {
                  deleteTodo({ variables: { id: todo.id } });
                }}
              >
                X
              </button>
            </Item>
          ) : (
            <Item>
              <Text>{todo.task}</Text>
            </Item>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default TodoList;
