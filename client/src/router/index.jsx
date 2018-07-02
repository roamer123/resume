import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from 'container/login';
import Dashboard from 'container/dashboard';


const Main = () => <h2>Main</h2>
const Sandwiches = () => <h2>Sandwiches</h2>
const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to='/tacos/bus'>Bus</Link></li>
      <li><Link to='/tacos/cart'>Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    childRoutes: [
      {
        path: '/2',
        component: Bus
      },
      {
        path: '/3',
        component: Cart
      }
    ]
  },
]
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.childRoutes} />
  )} />
)

export { RouteWithSubRoutes }
