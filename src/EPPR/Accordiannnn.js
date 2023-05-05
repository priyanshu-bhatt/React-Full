import React, { useState } from 'react';
import "../App.css"
function Accordionnnn({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        <h2>{title}</h2>
        <span className={`icon ${isOpen ? 'open' : 'closed'}`}></span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordionnnn;