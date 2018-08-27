import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { RouteWithSubRoutes } from '../../../../Routes'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: '100%',
		textAlign: 'center',
		backgroundColor: theme.palette.primary.dark
	}
})

export const RightDisplayContainer = ({ routes, classes }) => (
	<Grid data-testid="rightdisplaycontainer" item xs={12} sm={3}>
		<Paper className={classes.paper}>
			{routes &&
				routes.length &&
				routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
		</Paper>
	</Grid>
)

RightDisplayContainer.DisplayName = 'RightDisplayContainer'
RightDisplayContainer.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
	classes: PropTypes.any
}

export default withStyles(styles)(RightDisplayContainer)
