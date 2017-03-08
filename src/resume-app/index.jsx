import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRedirect
} from 'react-router';

//import { store } from './store';

import App from './components/app.component';
import Resume from './components/resume/resume.component';
import NotFound from './components/notfound.component';
import Home from './components/home.component';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes
  , document.querySelector('.app-container'));
