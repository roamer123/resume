import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import TreeMenu from 'component/tree-menu';

export default () => (
  <Switch>
    {/* <Route exact path='/dashboard/version-manage' component={TreeMenu} /> */}
    <Route path='/dashboard/version-manage/0-0-0-0' render={() => <h1>/dashboard/0-0-0-0</h1>} />
    <Route path='/dashboard/version-manage/2' render={() => <h1>/dashboard/2</h1>} />
  </Switch>
	)
