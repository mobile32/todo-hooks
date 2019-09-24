import React, { Suspense } from "react";
import Header from "./components/Header";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_TODOS = gql`
  {
    todos {
      id
      task
      done
    }
  }
`;

const OptimizedHeader = React.memo(Header);
const LongTodoList = React.lazy(() => import("./components/List"));

const App = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <OptimizedHeader text="Todo list" />
      <Suspense fallback={<div>Loading...</div>}>
        <LongTodoList
          todos={data.todos.map(todo => ({
            id: todo.id,
            task: todo.task,
            done: todo.done
          }))}
        />
      </Suspense>
    </>
  );
};

export default App;
