import React, { useState } from "react";
import "./style.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-icon">
          {isActive ? (
            // minus svg
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M0 12v1h23v-1h-23z" />
            </svg>
          ) : (
            // plus svg
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
            </svg>
          )}
        </div>
        <div>{title}</div>
      </div>
      <hr />
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
