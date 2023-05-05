import { useState } from 'react';

function Imageslide({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle clicking on the "next" button
  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle clicking on the "previous" button
  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <img src={images[currentIndex]} alt="Slide" />

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Imageslide;