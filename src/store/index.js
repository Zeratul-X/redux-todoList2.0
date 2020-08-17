/*
 * @Author: Zeratul
 * @Date: 2020-08-17 18:00:22
 * @LastEditTime: 2020-08-17 18:12:37
 * @FilePath: \todolist-with-redux\src\store\index.js
 */
import {createStore} from 'redux'

import rootReducer from './reducer'

export default createStore(
    rootReducer,
    // 7.调用Chrome的redux调试插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
