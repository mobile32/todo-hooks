import React, { Suspense } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import AddEdit from "./components/AddEdit";

import "normalize.css";

const OptimizedHeader = React.memo(Header);
const LongTodoList = React.lazy(() => import("./components/TodoList"));

const Title = styled.h1`
  color: #50507b;
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <OptimizedHeader />
      <AddEdit />
      <Suspense fallback={<div>Loading...</div>}>
        <LongTodoList />
      </Suspense>
    </Wrapper>
  );
};

export default App;
