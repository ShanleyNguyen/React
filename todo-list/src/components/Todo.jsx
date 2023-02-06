import React from "react";
import "../styles/todo.css";
import { Button } from "antd";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default function Todo({ todo, taskCompleted, taskDeleted }) {
  return (
    <>
      <div className="todo-item">
        <Button
          className={todo.isCompleted ? "btn-task-completed" : "btn-task"}
        >
          <span className={todo.isCompleted ? "text-completed" : "text-todo"}>
            {todo.name}
          </span>
          <CheckOutlined
            className="checked-icon"
            onClick={() => taskCompleted(todo.id)}
          />
          <CloseCircleOutlined
            className="delete-icon"
            onClick={() => taskDeleted(todo.id)}
          />
        </Button>
      </div>
    </>
  );
}
