import React, { useEffect } from 'react';

const TitleUpdater = () => {
  useEffect(() => {
    document.title = 'React Side Effects Demo';
    return () => {
      document.title = 'React App';
    };
  }, []);

  return (
    <div>
      <h2>Title Updated</h2>
    </div>
  );
};

export default TitleUpdater;
