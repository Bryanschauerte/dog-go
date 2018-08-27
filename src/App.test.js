import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
jest.mock('axios')
it('renders without crashing', () => {
	const data = {
		results: [{
			name: 'luke'
		}]
	}

	axios.get.mockReturnValueOnce(() => {
		data
	})
	const div = document.createElement('div')
	ReactDOM.render( < App / > , div)
	ReactDOM.unmountComponentAtNode(div)
})