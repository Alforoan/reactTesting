import React from "react";

const Warning = (props) => {
  return (
    <main>
      <div>
        <h3>Are you sure you want to do that?</h3>
      </div>
      <button onClick={props.handleWarningClick}>Yes</button>
      <button onClick={props.handleWarningClickTwo}>No</button>
    </main>
  );
};

export default Warning;
