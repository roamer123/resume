import { Route, Link } from 'react-router-dom';
import React from 'react';


const MenuLink = ({ to, children, ...rest }) => (
  <Route
    path={to}
    children={(match) => (
      <li className={match ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
			)}
	 />
)

export default () => (
  <ul>
    <MenuLink to='/user'>menu1</MenuLink>
    <MenuLink to='/login'>menu2</MenuLink>
  </ul>
	)
