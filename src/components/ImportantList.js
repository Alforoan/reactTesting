import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash, FaRegStar, FaStar } from "react-icons/fa";

const ImportantList = ({
  tasks,
  removeTask,
  editTask,
  importantTask,
  completeTask,
}) => {
  return (
    <div>
      {tasks.map((task) => {
        const { id, title, isImportant = true, isCompleted } = task;
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

export default ImportantList;
