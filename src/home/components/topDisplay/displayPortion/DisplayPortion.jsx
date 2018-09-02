import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import { RouteWithSubRoutes } from '../../../../Routes'
import { withStyles } from '@material-ui/core/styles'
import NavBar from '../../navBar/NavBar'
import { connect } from 'react-redux'
import { changeActiveTab } from '../../../actions'
import { home, activeTab } from '../../../selectors'
import { Route } from 'react-router-dom'

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: '100%',
		textAlign: 'center',
		backgroundColor: theme.palette.primary
	}
})

export const DisplayPortion = ({
	routes,
	classes,
	activeTab,
	changeActiveTab
}) => (
	<div data-testid="DisplayPortion" xs={12} sm={3}>
		{console.log(routes[activeTab], 'act', activeTab) // eslint-disable-line
		}
		<NavBar activeTab={activeTab} changeActiveTab={changeActiveTab} />
		<Paper className={classes.paper}>
			{routes &&
				routes[activeTab] && (
				<Route
					path={routes[activeTab].path}
					component={routes[activeTab].component}
				/>
			)}
		</Paper>
	</div>
)

DisplayPortion.DisplayName = 'DisplayPortion'
DisplayPortion.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
	classes: PropTypes.any,
	activeTab: PropTypes.any,
	changeActiveTab: PropTypes.func
}
const mapStateToProps = state => {
	console.log(activeTab, 'state') // eslint-disable-line
	return {
		home: home(state),
		activeTab: activeTab(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		changeActiveTab: index => dispatch(changeActiveTab(index))
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(DisplayPortion))

// export default withStyles(styles)(DisplayPortion)
