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
import AddPosition from 'container/add-position';
import Candidate from 'container/candidate';
import AddCandidate from 'container/add-candidate';
import Calendar from 'container/calendar';
import Icon from 'templates/icon';
import '../style/reset.less';

const NotFound = () => (<Content title='404' text='抱歉，你访问的页面不存在' />)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={BasicLayout} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/icon' component={Icon} />
        <BasicLayout>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/user-group' component={PersonInfo} />
          <Route exact path='/user-group' component={PersonInfo} />
          <Route exact path='/recruit-title' component={RecruitTitle} />
          <Route exact path='/recruit-title/add' component={AddPosition} />
          <Route exact path='/recruit-title/add-excel' component={AddPosition} />
          <Route exact path='/candidate' component={Candidate} />
          <Route exact path='/candidate/add' component={AddCandidate} />
          <Route exact path='/calendar' component={Calendar} />
        </BasicLayout>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>)
export default App;
