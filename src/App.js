/*
 * @Author: Zeratul
 * @Date: 2020-08-17 10:30:23
 * @LastEditTime: 2020-08-17 18:02:41
 * @FilePath: \todolist-with-redux\src\App.js
 */
import React, { Component } from 'react'
import TodoList from './components/TodoList'
export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    )
  }
}
