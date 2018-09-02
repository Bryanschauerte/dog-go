import DisplayPortion from './DisplayPortion'
import React from 'react'
import {
	cleanup,
	render,
	wait
} from 'react-testing-library'
import {
	describe,
	it,
	beforeEach,
	expect,
	afterAll
} from 'jest'


describe('#DisplayPortion component', async () => {
	const component = < DisplayPortion / >

	beforeEach(cleanup)
	afterAll(cleanup)

	it('should render', () => {
		const {
			getByTestId
		} = render(component)
		wait(() =>
			expect(getByTestId('DisplayPortion')).toBeInTheDOM()
		)
	})

})