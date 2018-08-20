import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { store } from './store'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Routes />
				</Provider>
			</div>
		)
	}
}

export default App
