import gql from "graphql-tag";

export const GET_TODOS = gql`
  query {
    todos(sort: "id", dir: "desc") {
      id
      task
      done
    }
  }
`;

export const ADD_TODO = gql`
  mutation($task: String!) {
    createTodo(input: { task: $task, done: false }) {
      id
      task
      done
    }
  }
`;

export const DONE_TODO = gql`
  mutation($id: ID!) {
    updateTodo(id: $id, input: { done: true }) {
      id
      task
      done
    }
  }
`;

export const DELETE_TODO = gql`
  mutation($id: ID!) {
    deleteTodo(id: $id)
  }
`;
