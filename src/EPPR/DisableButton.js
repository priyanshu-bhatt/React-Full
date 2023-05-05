import React, { useState } from 'react';

function DisableButton() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsButtonDisabled(event.target.value.trim() === '');
  };

  const handleButtonClick = () => {
    // do something
    console.log("HII")
  };

  return (
    <div>
      <h2>Button Example</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button disabled={isButtonDisabled} onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
}

export default DisableButton;