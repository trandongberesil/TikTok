import PropTypes from "prop-types";
import React from "react";
import "./GlobalStyle.scss";
function GlobalStyle({ children }) {
  return React.Children.only(children);
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
