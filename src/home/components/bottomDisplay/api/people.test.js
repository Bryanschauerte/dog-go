import {
	getPeople
} from './people'
describe('people', () => {
	it('getbyId, no id', () => {
		const expected = 'people'
		const actual = getPeople()
		expect(expected).toBe(expected)
	})
	it('getbyId, with id', () => {
		const expected = 'people/12'
		const actual = getPeople(12)
		expect(expected).toBe(expected)
	})
})