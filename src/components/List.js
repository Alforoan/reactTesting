import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash, FaRegStar, FaStar } from "react-icons/fa";

const List = ({ tasks, removeTask, editTask, importantTask, completeTask }) => {
  return (
    <div>
      {tasks
        .filter((task) => task.isCompleted !== true)
        .map((task) => {
          const { id, title, isImportant, isCompleted } = task;
          return (
            <article key={id}>
              <p
                onClick={() => completeTask(id)}
                className={isCompleted ? "title-completed" : "title"}
              >
                {title}
              </p>
              <div className="btn-container">
                <button className="edit" onClick={() => editTask(id)}>
                  <FaEdit className="edit-icon" />
                </button>
                <button className="delete" onClick={() => removeTask(id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button className="star" onClick={() => importantTask(id)}>
                  {isImportant ? (
                    <FaStar className="star-icon" />
                  ) : (
                    <FaRegStar className="star-icon" />
                  )}
                </button>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default List;
