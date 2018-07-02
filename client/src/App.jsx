import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'babel-polyfill';

import Login from 'container/login';
import Dashboard from 'container/dashboard';
import Content from 'container/Content';
import '../style/reset.less';

const NotFound = () => (<Content title='404' text='抱歉，你访问的页面不存在' />)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>)
export default App;
