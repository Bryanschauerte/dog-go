import constants from './constants'

describe('constants', () => {
	it('contains stateName', () => {
		expect(constants.stateName).toEqual('BOTTOMDISPLAY')
	})
	it('contains changeActive string', () => {
		expect(constants.changeActive).toEqual('BOTTOMDISPLAY changeActive')
	})
})