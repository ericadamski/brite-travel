import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createGlobalStyle } from "styled-components";
import * as serviceWorker from "./serviceWorker";

/**
 * Tagged Template literals
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
 */
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster|Shadows+Into+Light');

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Shadows Into Light', cursive;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
