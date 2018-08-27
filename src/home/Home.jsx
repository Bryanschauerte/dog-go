import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TopDisplay from './components/topDisplay/TopDisplay'
import { withStyles } from '@material-ui/core/styles'
import BottomDisplay from './components/bottomDisplay/BottomDisplay'

const styles = theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column'
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
})

const Home = ({ classes }) => {
	return (
		<div data-testid="homeComponent" className={classes.root}>
			<TopDisplay />
			<BottomDisplay />
			{/* <ul>
				<li>
					<Link to="/home/subOne">SUb1</Link>
				</li>
				<li>
					<Link to="/home/subTwo">sub2</Link>
				</li>
				<button onClick={makeStateChange} />
			</ul> */}
		</div>
	)
}
Home.propTypes = {
	routes: PropTypes.any,
	dispatch: PropTypes.any,
	classes: PropTypes.any
}

export default withStyles(styles)(Home)
