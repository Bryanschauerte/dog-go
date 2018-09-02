import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route
} from 'react-router-dom'
import Home from './home/Home'

const Default = () => <Redirect to="/home/0" />

const routes = [
	{
		path: '/home/:subLocation',
		component: Home,
		exact: true
	}
]

export const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		exact
		render={props => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} routes={route.routes} />
		)}
	/>
)

export const Routes = () => (
	<Router>
		<Switch>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
			<Route component={Default} />
		</Switch>
	</Router>
)
