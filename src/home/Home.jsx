import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RouteWithSubRoutes } from '../Routes'
import { connect } from 'react-redux'
import { changeUIState } from './actions'
const subOne = () => <div>subOne</div>
const subTwo = () => <div>subTwo</div>
const routes = [
	{
		path: '/home/subOne',
		component: subOne
	},
	{
		path: '/home/subTwo',
		component: subTwo
	}
]

const Home = ({ changeUIStatet }) => {
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li>
					<Link to="/home/subOne">SUb1</Link>
				</li>
				<li>
					<Link to="/home/subTwo">sub2</Link>
				</li>
				<button onClick={changeUIStatet} />
			</ul>

			{routes &&
				routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
		</div>
	)
}
Home.propTypes = {
	routes: PropTypes.any,
	dispatch: PropTypes.any,
	changeUIStatet: PropTypes.any
}
const mapStateToProps = state => {
	return state
}
const mapDispatchToProps = dispatch => {
	return { dispatch, changeUIStatet: () => dispatch(changeUIState(1)) }
}
export const ConnectedHome = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
