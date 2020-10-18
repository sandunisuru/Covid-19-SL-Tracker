import React from 'react';

import { Provider } from 'react-redux';

import Home from '../components/Home'
import AddNews from '../components/AddNews';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appbar from '../components/Appbar'
import {getAllRoutes} from '../navigation/Routes'
import store from '../store/store'

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Router>
          <Appbar />
          <Switch>
            {getAllRoutes().map(route => (
              <Route
              key={route.path || 'nopath'}
              path={route.path}
              exact={route.exact}
              component={route.component}/>
            ))}
          </Switch>
        </Router>

      </div>
    </Provider>


  );
}

export default App;
