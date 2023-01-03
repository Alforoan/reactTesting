import React from "react";

const Warning = (props) => {
  return (
    <main className="warning-container">
      <div>
        <h3 className="warning-text">Are you sure you want to do that?</h3>
      </div>
      <button className="warning-yes-btn" onClick={props.handleWarningClick}>
        Yes
      </button>
      <button className="warning-no-btn" onClick={props.handleWarningClickTwo}>
        No
      </button>
    </main>
  );
};

export default Warning;
