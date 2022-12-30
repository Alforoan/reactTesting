import React from "react";

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        const { id, title } = task;
        return (
          <article key={id}>
            <p>{title}</p>
          </article>
        );
      })}
    </div>
  );
};

export default List;
