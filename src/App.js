import React from 'react';

import { Provider } from 'react-redux';

import Home from './components/Home'

import store from './store'

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
    
    
  );
}

export default App;
