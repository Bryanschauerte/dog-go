import constants from './constants'

describe('constants', () => {
	it('contains stateName', () => {
		expect(constants.stateName).toEqual('TOPDISPLAY')
	})
	it('contains changeActive string', () => {
		expect(constants.changeActive).toEqual('TOPDISPLAY changeActive')
	})
})