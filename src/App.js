import React from 'react';

import { Provider } from 'react-redux';

import Home from './components/Home'
import AddNews from './components/AddNews'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appbar from './components/Appbar'

import store from './store'

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Appbar/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add">
              <AddNews />
            </Route>
          </Switch>
        </Router>

      </div>
    </Provider>


  );
}

export default App;
