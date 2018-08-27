import {
	Component
} from './BottomDisplay'
import React from 'react'
import {
	cleanup,
	render,
	wait
} from 'react-testing-library'

describe('#BottomDisplay component', async () => {
	const component = < Component classes = {
		{
			root: ''
		}
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
			expect(getByTestId('Bottomdisplay')).toBeInTheDOM()
		)
	})

})