import React from 'react';

import Appbar from '../components/Appbar';
import Routes from '../navigation/Routes';

function App() {
  return (
    <div className="App">
        <Routes navigation={<Appbar />} />
    </div>
  );
}

export default App;
