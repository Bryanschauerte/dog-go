import ActiveBottomChild from './ActiveBottomChild'
import React from 'react'
import {
	cleanup,
	render,
	wait
} from 'react-testing-library'


describe('#ActiveBottomChild component', async () => {
	const component = < ActiveBottomChild / >

	beforeEach(cleanup)
	afterAll(cleanup)

	it('should render', () => {
		const {
			getByTestId
		} = render(component)
		wait(() =>
			expect(getByTestId('ActiveBottomChild')).toBeInTheDOM()
		)
	})

})