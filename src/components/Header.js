import React, { Component } from "react";
import { Query } from "react-apollo";

import { GET_TODOS } from "../queries";

export default class Header extends Component {
  _workScore = todos => {
    return todos.length * todos.length;
  };

  render() {
    return (
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return <h4>Work score {this._workScore(data.todos)}</h4>;
        }}
      </Query>
    );
  }
}
