import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import ImageDog from '../../../images/dogsPinkWall.jpg'
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

export const LargeMediaDisplay = ({ classes }) => (
	<Grid data-testid="LargeMediaDisplay" item xs={12} sm={9}>
		<Paper className={classes.paper}>
			<img src={ImageDog} className="imgDog" height="500" />
		</Paper>
	</Grid>
)

LargeMediaDisplay.DisplayName = 'LargeMediaDisplay'
LargeMediaDisplay.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object),
	classes: PropTypes.any
}

export default withStyles(styles)(LargeMediaDisplay)
