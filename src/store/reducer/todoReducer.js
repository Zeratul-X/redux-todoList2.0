/*
 * @Author: Zeratul
 * @Date: 2020-08-17 18:06:29
 * @LastEditTime: 2020-08-17 18:55:01
 * @FilePath: \todolist-with-redux\src\store\reducer\todoReducer.js
 */
import { CHANGEINPUT, ADDTODO, DELETETOD } from "../actionTypes";
const defaultState = {
  empText: "Write Something!",
  inputValue: "",
  todoList: ["欢迎使用TODOList", "该TodoList使用React-Redux完成", "尽情享用！"],
};

export default function (state = defaultState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGEINPUT:
      newState.inputValue = action.payload;
      break;
    case ADDTODO:
      newState.todoList.unshift(newState.inputValue);
      break;
    case DELETETOD:
        newState.todoList.splice(action.payload,1);
      break;
    default:
      break;
  }

  return newState;
}
