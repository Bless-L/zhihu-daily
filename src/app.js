import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { Route, Link, HashRouter as Router } from 'react-router-dom'

import store from './redux/Store/Store'
import Home from './views/Home';
import Detail from './views/Detail';

const App = () => (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/home" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </div>
      </Router>
    </Provider>
  );

export default App