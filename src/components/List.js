import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        const { id, title } = task;
        return (
          <article key={id}>
            <p>{title}</p>
            <button className="edit">
              <FaEdit />
            </button>
            <button className="delete">
              <FaTrash />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
