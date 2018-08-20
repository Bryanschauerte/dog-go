import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedHome } from './home/Home'

const routes = [
	{
		path: '/',
		component: ConnectedHome
	}
]

export const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} routes={route.routes} />
		)}
	/>
)

export const Routes = () => (
	<Router>
		<div>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</div>
	</Router>
)
