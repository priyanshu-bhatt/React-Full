import React, { useState } from 'react';

function HideElement() {
  const [isElementVisible, setIsElementVisible] = useState(true);

  const handleButtonClick = () => {
    setIsElementVisible(false);
  };

  return (
    <div>
      <h2>Hide Element Example</h2>
      {isElementVisible && (
        <p>This element will be hidden when the button is clicked.</p>
      )}
      <button onClick={handleButtonClick}>Hide Element</button>
    </div>
  );
}

export default HideElement;