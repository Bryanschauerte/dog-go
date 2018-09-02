import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { changeUIState } from './actions'
import ChildRoutes from './routes.jsx'
import { home, activeTab } from '../../selectors'
import DisplayPortion from './displayPortion/DisplayPortion.jsx'
// import LeftDisplayContainer from './LeftDisplayContainer/LeftDisplayContainer'
import { connect } from 'react-redux'

export const styles = theme => ({
	root: {
		flexGrow: 2,
		height: '70vh',
		padding: theme.padding.containers
	}
})

export const Component = ({ classes, activeTab }) => (
	<Grid
		data-testid="TopDisplay"
		container
		className={classes.root}
		spacing={16}
	>
		{/* <LeftDisplayContainer activeTab={activeTab} routes={ChildRoutes.left} /> */}
		<Grid item xs={12} sm={6}>
			<DisplayPortion activeTab={activeTab} routes={ChildRoutes.left} />
		</Grid>
		<Grid item xs={12} sm={6}>
			<DisplayPortion activeTab={activeTab} routes={ChildRoutes.right} />
		</Grid>
	</Grid>
)

Component.displayname = 'TopDisplay'
Component.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	makeStateChange: PropTypes.func,
	classes: PropTypes.any,
	activeTab: PropTypes.number
}

const mapStateToProps = state => {
	console.log(state, 'state') // eslint-disable-line
	return {
		home: home(state),
		activeTab: activeTab(state)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		makeStateChange: () => dispatch(changeUIState(1))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Component))
