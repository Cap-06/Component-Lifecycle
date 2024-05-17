import React, { useState, useEffect } from 'react';

let ScrollEventComponent = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Y Position: {scrollY}</h1>
    </div>
  );
};

export default ScrollEventComponent;
