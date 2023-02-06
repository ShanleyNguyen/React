import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, taskCompleted, taskDeleted }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          taskCompleted={taskCompleted}
          taskDeleted={taskDeleted}
        />
      ))}
    </>
  );
}
