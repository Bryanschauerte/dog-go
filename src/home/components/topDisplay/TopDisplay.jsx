import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { changeUIState } from './actions'
import ChildRoutes from './routes'
import RightDisplayContainer from './RightDisplayContainer/RightDisplayContainer'
import LeftDisplayContainer from './LeftDisplayContainer/LeftDisplayContainer'
import { connect } from 'react-redux'

export const styles = () => ({
	root: {
		flexGrow: 2,
		height: '70vh'
	}
})

export const Component = ({ classes }) => (
	<Grid
		data-testid="TopDisplay"
		container
		className={classes.root}
		spacing={24}
	>
		<LeftDisplayContainer routes={ChildRoutes.left} />
		<RightDisplayContainer routes={ChildRoutes.right} />{' '}
	</Grid>
)

Component.displayname = 'TopDisplay'
Component.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	makeStateChange: PropTypes.func,
	classes: PropTypes.any
}

const mapStateToProps = state => {
	return state
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
