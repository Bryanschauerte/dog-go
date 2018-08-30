import React from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

const styles = theme => ({
	card: {
		transition: 'all 300ms ease-in-out',
		minWidth: 275,
		display: 'flex',
		height: '100%',
		position: 'relative',
		bottom: 0,
		backgroundColor: theme.palette.secondary.dark
	},
	title: {
		marginBottom: 16,
		fontSize: 14
	},
	growItem: {},
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

const ActiveBottomChild = ({ classes, info, handleClick }) => (
	<div>
		<Zoom in={true}>
			<Card className={classes.card} data-testid="ActiveBottomChild">
				<CardContent className={classes.content}>
					<Typography className={classes.typography} color="textSecondary">
						Word of the Day{' '}
					</Typography>{' '}
					<Typography
						className={classes.typography}
						variant="headline"
						component="h2"
					>
						{' '}
						{info}{' '}
					</Typography>{' '}
					<Typography className={classes.typography} component="p">
						well meaning and kindly. <br />
					</Typography>{' '}
				</CardContent>
				<CardActions className={classes.title}>
					<Button onClick={handleClick} color="primary" size="small">
						{' '}
						Learn More{' '}
					</Button>{' '}
				</CardActions>{' '}
			</Card>
		</Zoom>
	</div>
)

ActiveBottomChild.propTypes = {
	info: PropTypes.any,
	classes: PropTypes.any,
	handleClick: PropTypes.func
}

export default withStyles(styles)(ActiveBottomChild)
