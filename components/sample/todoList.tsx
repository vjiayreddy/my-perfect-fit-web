import React, { memo } from "react";
import TodoItemComponent from "./todoItem";

interface TodoListComponentProps {
  data: any[];
}

const TodoListComponent = ({ data }: TodoListComponentProps) => {
  return (
    <div>
      <ul>
        {data?.map((item: any) => (
          <TodoItemComponent key={item?.id} todo={item} />
        ))}
      </ul>
    </div>
  );
};

export default memo(TodoListComponent);
