// import TodoList from "./components/TodoList";
import React, { useCallback, useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/reset.css";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onEnter = useCallback(
    (e) => {
      if (textInput !== "" && e.key === "Enter") {
        setTodoList([
          { id: v4(), name: textInput, isCompleted: false },
          ...todoList,
        ]);
        setTextInput("");
      }
    },
    [textInput, todoList]
  );

  const addTodo = () => {
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
  };

  const onAddTodoItem = useCallback(
    (e) => {
      if (textInput !== "" && e.key === "Enter") {
        addTodo();
      } else {
        addTodo();
      }
    },
    [textInput, todoList]
  );

  const taskCompleted = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  const taskDeleted = (id) => {
    const removeArr = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(removeArr);
  };

  return (
    <React.Fragment>
      <h1>List of todo task</h1>
      <Input
        size="large"
        name="add-todo"
        value={textInput}
        onChange={onTextInputChange}
        onPressEnter={onEnter}
        allowClear
        addonAfter={
          <Button
            disabled={!textInput}
            style={{ border: "none" }}
            onClick={onAddTodoItem}
          >
            Add
          </Button>
        }
      ></Input>
      <TodoList
        todoList={todoList}
        taskCompleted={taskCompleted}
        taskDeleted={taskDeleted}
      />
    </React.Fragment>
  );
}

export default App;
