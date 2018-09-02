import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import BottomChild from './components/BottomChild'
import ActiveBottomChild from './components/ActiveBottomChild'
import { connect } from 'react-redux'
import { changeUIState } from './actions'
import { bottomDisplay, activeTab, home } from './selectors'
import { getPeople } from './api/people'

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: '30vh',
		display: 'flex',
		backgroundColor: theme.palette.secondary.light
	}
})
const stuff = [1, 2, 3, 4]

export const Component = ({
	classes,
	activeTab,
	getPeopleFun,
	makeStateChange
}) => {
	return (
		<Grid
			data-testid="BottomDisplay"
			className={classes.root}
			container
			spacing={24}
		>
			{stuff.map(
				(thing, index) =>
					activeTab === index ? (
						<ActiveBottomChild
							handleClick={() => getPeopleFun(1)}
							key={index}
							info={thing}
						/>
					) : (
						<BottomChild
							makeStateChange={() => makeStateChange(index)}
							key={index}
							info={thing}
						/>
					)
			)}
		</Grid>
	)
}

Component.displayname = 'BottomDisplay'
Component.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	makeStateChange: PropTypes.func,
	activeTab: PropTypes.any,
	classes: PropTypes.any,
	getPeopleFun: PropTypes.any
}

const mapStateToProps = state => {
	return {
		bottomDisplay: bottomDisplay(state),
		activeTab: activeTab(state),
		home: home(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		makeStateChange: index => dispatch(changeUIState(index)),
		getPeopleFun: index =>
			dispatch(getPeople(s => console.log(s), e => console.log(e), index)) // eslint-disable-line
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Component))
