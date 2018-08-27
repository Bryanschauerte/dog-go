import axios from 'axios'
jest.mock(axios)
export default {
	get: jest.fn((string) => Promise.resolve({
		results: {},
		query: string
	}))
}