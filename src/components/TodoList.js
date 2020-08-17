/*
 * @Author: Zeratul
 * @Date: 2020-08-17 11:37:57
 * @LastEditTime: 2020-08-17 18:54:20
 * @FilePath: \todolist-with-redux\src\components\TodoList.js
 */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import styles from "./TodoList.module.scss";
import { connect } from "react-redux";
import {
  addAction,
  changeInputAction,
  deleteAction,
} from "../store/actionCreators";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div className={styles.box}>
          <Input
            placeholder={this.props.empText}
            className={styles.inpTodo}
            onChange={this.props.changeInputValue}
          ></Input>
          <Button
            className={styles.btnAddTodo}
            type="primary"
            onClick={this.props.addTodos}
          >
            添加TODO
          </Button>
        </div>
        <div className={styles.list}>
          <List
            className={styles.todoList}
            bordered
            dataSource={this.props.todoList}
            renderItem={(item, index) => (
              <List.Item onClick={this.props.deleteTodos.bind(this, index)}>
                {item}
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    empText: state.todoReducer.empText,
    todoList: state.todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: function (e) {
      dispatch(changeInputAction(e.target.value));
    },
    addTodos: function () {
      dispatch(addAction);
    },
    deleteTodos: function (index) {
      dispatch(deleteAction(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
