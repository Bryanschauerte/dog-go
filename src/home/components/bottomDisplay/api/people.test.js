import {
	getPeople
} from './people'

describe('people', () => {
	const mockDispatch = jest.fn()
	const mockAPI = jest.fn()
	const mockGetState = jest.fn()
	const fakeAction = () => {}


	it('getbyId, no id', () => {
		const expected = {
			'success': fakeAction,
			'fail': fakeAction,
			'url': 'https://swapi.co/api/people/'
		}

		const getPeopleMiddle = getPeople(fakeAction, fakeAction)
		expect(typeof getPeopleMiddle).toEqual('function')
		const apiCall = getPeopleMiddle(mockDispatch, mockGetState, mockAPI)
		expect(mockAPI).toBeCalledWith(mockDispatch, expected)
	})

	it('getbyId, with id', () => {
		const expected = {
			'success': fakeAction,
			'fail': fakeAction,
			'url': 'https://swapi.co/api/people/1'
		}

		const getPeopleMiddle = getPeople(fakeAction, fakeAction, 1)
		expect(typeof getPeopleMiddle).toEqual('function')
		const apiCall = getPeopleMiddle(mockDispatch, mockGetState, mockAPI)
		expect(mockAPI).toBeCalledWith(mockDispatch, expected)
	})
})