import React from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		height: '100%',
		jusifyContent: 'space-between',
		backgroundColor: theme.palette.secondary.light
	},
	title: {
		marginBottom: 16,
		fontSize: 14
	},
	content: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column'
	},
	typography: {
		display: 'flex',
		flex: 1
	},
	pos: {
		marginBottom: 12
	}
})

const BottomChild = ({ classes, makeStateChange, info }) => (
	<Card className={classes.card} data-testid="BottomChild">
		<CardContent className={classes.content}>
			<Typography className={classes.typography} color="textSecondary">
				Word of the Day
			</Typography>
			<Typography
				className={classes.typography}
				variant="headline"
				component="h2"
			>
				{info}
			</Typography>
			<Typography className={classes.typography} component="p">
				well meaning and kindly.
				<br />
			</Typography>
		</CardContent>
		<CardActions className={classes.title}>
			<Button onClick={makeStateChange} color="primary" size="small">
				Learn More
			</Button>
		</CardActions>
	</Card>
)

BottomChild.propTypes = {
	info: PropTypes.any,
	makeStateChange: PropTypes.func,
	classes: PropTypes.any
}

export default withStyles(styles)(BottomChild)
