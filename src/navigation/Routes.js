import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import AddNews from '../components/AddNews';
import About from '../components/About';


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add" exact component={AddNews}/>
                <Route path="/about" exact component={About}/>
            </Switch>
        </Router>
    );
}

export default Routes;
