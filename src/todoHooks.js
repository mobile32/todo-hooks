import React, { useState, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { GET_TODOS, ADD_TODO, DONE_TODO, DELETE_TODO } from "./queries";

const updateCacheAfterUpdate = {
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
};

const updateCacheAfterDelete = {
  update(
    cache,
    {
      data: { deleteTodo: id }
    }
  ) {
    const { todos } = cache.readQuery({ query: GET_TODOS });
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: todos.filter(todo => todo.id !== id) }
    });
  }
};

export const useGetTodo = () => useQuery(GET_TODOS);

export const useAddTodo = () => {
  const [todo, setTodo] = useState("");
  const [addTodo, { data }] = useMutation(ADD_TODO, updateCacheAfterUpdate);

  const save = useCallback(() => {
    addTodo({
      variables: {
        task: todo
      }
    });

    setTodo("");
  }, [todo]);

  return [todo, setTodo, save];
};

export const useFinishTodo = () =>
  useMutation(DONE_TODO, updateCacheAfterUpdate);

export const useDeleteTodo = () =>
  useMutation(DELETE_TODO, updateCacheAfterDelete);
