import React from "react";

interface TodoItemComponentProps {
  todo: any;
}

const TodoItemComponent = ({ todo }: TodoItemComponentProps) => {
  console.count("TodoItemComponent");
  return <li>{todo?.title}</li>;
};

export default TodoItemComponent;
