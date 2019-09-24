import React, { Suspense } from "react";

import Header from "./components/Header";
import AddEdit from "./components/AddEdit";

const OptimizedHeader = React.memo(Header);
const LongTodoList = React.lazy(() => import("./components/TodoList"));

const App = () => {
  return (
    <>
      <OptimizedHeader />
      <AddEdit />
      <Suspense fallback={<div>Loading...</div>}>
        <LongTodoList />
      </Suspense>
    </>
  );
};

export default App;
