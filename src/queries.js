import gql from "graphql-tag";

export const GET_TODOS = gql`
  query {
    todos {
      id
      task
      done
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($task: String!) {
    createTodo(input: { task: $task, done: false }) {
      id
      task
      done
    }
  }
`;

export const DELETE_TODO = gql`
  mutation {
    deleteTodo(id: "")
  }
`;
