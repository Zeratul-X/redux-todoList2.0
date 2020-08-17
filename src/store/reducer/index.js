/*
 * @Author: Zeratul
 * @Date: 2020-08-17 18:04:16
 * @LastEditTime: 2020-08-17 18:06:13
 * @FilePath: \todolist-with-redux\src\store\reducer\index.js
 */
import {combineReducers} from 'redux'
// 9.引入需要合并的reducer
import todoReducer from './todoReducer'
// 10.暴露接口
export default combineReducers({
    todoReducer
})