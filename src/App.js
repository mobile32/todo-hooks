import React, { Suspense } from "react";
import { useQuery } from "@apollo/react-hooks";

import Header from "./components/Header";
import AddEdit from "./components/AddEdit";
import { GET_TODOS } from "./queries";

const OptimizedHeader = React.memo(Header);
const LongTodoList = React.lazy(() => import("./components/List"));

const App = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <OptimizedHeader todos={data.todos} />
      <Suspense fallback={<div>Loading...</div>}>
        <LongTodoList
          todos={data.todos.map(todo => ({
            id: todo.id,
            task: todo.task,
            done: todo.done
          }))}
        />
      </Suspense>
      <AddEdit />
    </>
  );
};

export default App;
