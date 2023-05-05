import React, { useState } from 'react';

function Checklist() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="Option 1"
            checked={selectedOptions.includes('Option 1')}
            onChange={() => handleOptionChange('Option 1')}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Option 2"
            checked={selectedOptions.includes('Option 2')}
            onChange={() => handleOptionChange('Option 2')}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Option 3"
            checked={selectedOptions.includes('Option 3')}
            onChange={() => handleOptionChange('Option 3')}
          />
          Option 3
        </label>
      </div>
      <div>
        {selectedOptions.length > 0 && (
          <div>
            <h3>Selected Options:</h3>
            <ul>
              {selectedOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checklist;