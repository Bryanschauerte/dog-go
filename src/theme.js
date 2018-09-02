import {
	createMuiTheme
} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

export default () => createMuiTheme({
	typography: {
		fontFamily: ['Roboto'],
		fontSize: 14
	},
	palette: {
		primary: blue,
		secondary: green
	},
	padding: {
		containers: 16
	},
	overrides: {
		MuiButton: {
			root: {
				color: 'rgb(117,117,117)',
				maxWidth: '100%',
				fontSize: 16
			}
		}
	}
})