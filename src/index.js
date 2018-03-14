import React from 'react';
import ReactDOM from 'react-dom';


// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Redux Promise
import ReduxPromise from 'redux-promise';

// Reducers
import reducers from './reducers';

// Routes
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

const root = (
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <Routes />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
