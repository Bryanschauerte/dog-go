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
		backgroundColor: theme.palette.primary.light,
		height: '100%',
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
})

export const LeftDisplayContainer = ({ routes, classes }) => (
	<Grid data-testid="Leftdisplaycontainer" item xs={12} sm={9}>
		<Paper className={classes.paper}>
			{routes &&
				routes.length &&
				routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
		</Paper>
	</Grid>
)

LeftDisplayContainer.DisplayName = 'LeftDisplayContainer'
LeftDisplayContainer.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
	classes: PropTypes.any
}

export default withStyles(styles)(LeftDisplayContainer)
