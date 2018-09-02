import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
// import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,

		position: 'relative',
		minHeight: 200
	}
})

const NavBar = ({ classes, activeTab, changeActiveTab }) => {
	return (
		// <div>
		<div className={classes.root}>
			<AppBar className={classes.root} position="static" color="default">
				<Tabs
					value={activeTab}
					indicatorColor="secondary"
					textColor="primary"
					fullWidth
				>
					<Tab onClick={() => changeActiveTab(0)} label="Item One" />
					<Tab onClick={() => changeActiveTab(1)} label="Item Two" />
					<Tab onClick={() => changeActiveTab(2)} label="Item Three" />
				</Tabs>
			</AppBar>
		</div>
	)
}
NavBar.propTypes = {
	routes: PropTypes.any,
	dispatch: PropTypes.any,
	classes: PropTypes.any,
	activeTab: PropTypes.any,
	changeActiveTab: PropTypes.func
}

export default withStyles(styles)(NavBar)
