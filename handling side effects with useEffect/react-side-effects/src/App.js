import React from 'react';
import DataFetcher from './DataFetcher';
import EventSubscriber from './EventSubscriber';
import TitleUpdater from './TitleUpdater';

const App = () => {
  return (
    <div>
      <DataFetcher />
      <hr />
      <EventSubscriber />
      <hr />
      <TitleUpdater />
    </div>
  );
};

export default App;
