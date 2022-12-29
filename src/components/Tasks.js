import React from "react";
import { FaHome } from "react-icons/fa";

const handleClick = () => {};

function Tasks() {
  const [message, setMessage] = React.useState("");
  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <form>
        <input onClick={handleClick} type="text" placeholder={message} />
      </form>
    </div>
  );
}

export default Tasks;
