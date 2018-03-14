import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Components
import App from './components/App';

const Routes =  props => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
        </Router>
    );
}

export default Routes;