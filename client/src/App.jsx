import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'babel-polyfill';

import Login from 'container/login';
import BasicLayout from 'container/basic-layout';
import Content from 'container/Content';
import Dashboard from 'container/dashboard';
import PersonInfo from 'container/person-info';
import RecruitTitle from 'container/recruit-title';
import Candidate from 'container/candidate';
import Calendar from 'container/calendar';
import '../style/reset.less';

const NotFound = () => (<Content title='404' text='抱歉，你访问的页面不存在' />)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={BasicLayout} />
        <Route exact path='/login' component={Login} />
        <BasicLayout>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/user-group' component={PersonInfo} />
          <Route path='/recruit-title' component={RecruitTitle} />
          <Route path='/candidate' component={Candidate} />
          <Route path='/calendar' component={Calendar} />
        </BasicLayout>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>)
export default App;
