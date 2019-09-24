import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    return <h4>{this.props.text}</h4>;
  }
}
