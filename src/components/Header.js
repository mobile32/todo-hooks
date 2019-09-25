import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";

import { GET_TODOS } from "../queries";

const Text = styled.h4`
  color: #50507b;
  text-align: center;
`;

export default class Header extends Component {
  _workScore = todos => {
    const lengthOfDone = todos.filter(todo => todo.done).length;
    const lengthUnfinished = todos.filter(todo => !todo.done).length;

    return lengthOfDone - lengthUnfinished;
  };

  render() {
    return (
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return <Text>Score {this._workScore(data.todos)}</Text>;
        }}
      </Query>
    );
  }
}
