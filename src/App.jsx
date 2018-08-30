import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { store } from './store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
	render() {
		const customTheme = theme()

		// api(e => console.log(e), { params: { search: 'luke' } }) // eslint-disable-line
		return (
			<MuiThemeProvider theme={customTheme}>
				<CssBaseline />
				<div className="App">
					<Provider store={store}>
						<Routes />
					</Provider>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
