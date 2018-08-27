import axios from 'axios'
jest.mock('axios')


// const axios = jest.mock('axios', {
// 	get: jest.fn((string) => Promise.resolve({
// 		results: {},
// 		query: string
// 	}))
// })
import urls from './config'
import api from './api'

describe('people', async () => {
	it('default get with no param', async () => {
		const data = {
			results: [{
				name: 'luke'
			}]
		}

		axios.get.mockReturnValueOnce(() => {
			data
		})

		// )
		// console.log(axios)
		const mockDisp = jest.fn()
		const actual = await api(mockDisp)
		// const actual = getPeople()

		expect(axios.get).toHaveBeenCalledTimes(1)
		expect(mockDisp).toHaveBeenCalledTimes(1)

	})

})