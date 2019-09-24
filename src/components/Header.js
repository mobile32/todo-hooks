import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    todos: PropTypes.array
  };

  _workScore = () => {
    const { todos } = this.props;
    return todos.length * todos.length;
  };

  render() {
    return <h4>Work score {this._workScore()}</h4>;
  }
}
