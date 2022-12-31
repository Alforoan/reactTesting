import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const List = ({ tasks, removeItem }) => {
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
              <button className="delete" onClick={() => removeItem(id)}>
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
