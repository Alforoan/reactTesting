import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash, FaRegStar } from "react-icons/fa";

const List = ({ tasks, removeTask, editTask }) => {
  return (
    <div>
      {tasks.map((task) => {
        const { id, title } = task;
        return (
          <article key={id}>
            <p>{title}</p>
            <div className="btn-container">
              <button className="edit" onClick={() => editTask(id)}>
                <FaEdit className="edit-icon" />
              </button>
              <button className="delete" onClick={() => removeTask(id)}>
                <FaTrash className="delete-icon" />
              </button>
              <button className="star">
                <FaRegStar className="star-icon" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
