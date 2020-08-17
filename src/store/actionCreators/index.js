/*
 * @Author: Zeratul
 * @Date: 2020-08-17 18:22:10
 * @LastEditTime: 2020-08-17 18:53:57
 * @FilePath: \todolist-with-redux\src\store\actionCreators\index.js
 */
import { ADDTODO, DELETETOD, CHANGEINPUT } from "../actionTypes";
const addAction = {
  type: ADDTODO,
};

const changeInputAction = (inpValue) => (
  {
    type: CHANGEINPUT,
    payload: inpValue,
  }
);
const deleteAction = (index) => ({
    type: DELETETOD,
    payload:index
})

export { addAction, deleteAction, changeInputAction };
