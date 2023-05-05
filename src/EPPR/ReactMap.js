import React from "react";

export default function ReactMap(props) {
  const items = props.items;

  return (
    <div>
      <h2>Item List:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

