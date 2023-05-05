import React from 'react';

function CreateElementsss() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const listItems = items.map((item, index) =>
    React.createElement('li', { key: index }, item)
  );

  return (
    <div>
      <h2>List Example using createElement()</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default CreateElementsss;