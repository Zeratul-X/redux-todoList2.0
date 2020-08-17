/*
 * @Author: Zeratul
 * @Date: 2020-08-17 10:30:23
 * @LastEditTime: 2020-08-17 18:11:46
 * @FilePath: \todolist-with-redux\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
