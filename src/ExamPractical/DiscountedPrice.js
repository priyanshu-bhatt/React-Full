import React, { useState } from 'react';

function DiscountedPrice(props) {
  const [string, setString] = useState('$100');


  
  const HandChange = () => {
    setString('$75');
    
  };

  return (
    <div>
      <h1> Welcome To My Shop !!!</h1>
      <h2>The Price is  {string}</h2>
      <button onClick={HandChange}>DiscountedPrice</button>
    </div>
  );
}

export default DiscountedPrice;








