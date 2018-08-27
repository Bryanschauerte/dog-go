import * as actions from './actions'
import constants from './constants'


describe('actions', () => {
	it('changeUIState', () => {
		const actual = actions.changeUIState(2)
		const expected = {
			type: constants.changeActive,
			payload: 2
		}
		expect(expected).toEqual(actual)
	})

})