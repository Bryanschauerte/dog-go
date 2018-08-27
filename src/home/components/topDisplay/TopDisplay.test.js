import {
	Component
} from './TopDisplay'
import React from 'react'
import {
	cleanup,
	render,
	wait
} from 'react-testing-library'

jest.mock('react-router-dom')
import styles from './TopDisplay'


describe('#TopDisplay component', async () => {
	const component = < Component classes = {
		styles
	}
	store = {
		{}
	}
	/ >

	beforeEach(cleanup)
	afterAll(cleanup)

	it('should render', () => {
		const {
			getByTestId
		} = render(component)
		wait(() =>
			expect(getByTestId('topdisplay')).toBeInTheDOM()
		)
	})

})