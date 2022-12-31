import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const List = ({ tasks, removeTask }) => {
  return (
    <div>
      {tasks.map((task) => {
        const { id, title } = task;
        return (
          <article key={id}>
            <p>{title}</p>
            <div className="btn-container">
              <button className="edit">
                <FaEdit className="edit-icon" />
              </button>
              <button className="delete" onClick={() => removeTask(id)}>
                <FaTrash className="delete-icon" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
