import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopDisplay from './components/topDisplay/TopDisplay'
import { withStyles } from '@material-ui/core/styles'
import BottomDisplay from './components/bottomDisplay/BottomDisplay'
import { connect } from 'react-redux'
import { home, activeTab } from './selectors'
import { changeActiveTab } from './actions'
import constants from './constants'
import { Redirect } from 'react-router-dom'

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

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirectIt: false
		}
		this.redirectLocation = {
			pathname: 'home/0',
			state: { ...this.state, fromRedirect: true }
		}
	}

	componentDidMount() {
		const { subLocation } = this.props.match.params
		const shouldRedirect = !constants.subRoutes.includes(+subLocation)
		console.log(subLocation, 'subLocation') // eslint-disable-line
		if (shouldRedirect) {
			this.setState({ ...this.state, redirectIt: true })
		} else if (subLocation !== activeTab) {
			this.props.changeActiveTab(+subLocation)
		}
	}
	render() {
		return (
			<div data-testid="homeComponent" className={this.props.classes.root}>
				<TopDisplay />
				<BottomDisplay />
				{this.state.redirectIt && <Redirect to={this.redirectLocation} />}
			</div>
		)
	}
}
Home.propTypes = {
	dispatch: PropTypes.any,
	classes: PropTypes.any,
	match: PropTypes.any,
	activeTab: PropTypes.number,
	changeActiveTab: PropTypes.func
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
		changeActiveTab: tab => dispatch(changeActiveTab(tab))
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Home))

// export default withStyles(styles)(Home)
