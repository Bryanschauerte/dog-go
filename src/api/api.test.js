import axios from 'axios'
jest.mock('axios')

import api from './api'

describe('people', async () => {

	describe('GET', async () => {
		it('default get with no param', async () => {
			const data = {
				results: [{
					name: 'luke'
				}]
			}

			axios.get = jest.fn(() => Promise.resolve({
				data
			}))
			const mockDisp = jest.fn()
			const actual = await api(mockDisp)

			expect(axios.get).toHaveBeenCalledTimes(1)
			expect(mockDisp).toHaveBeenCalledTimes(1)

		})

		it('calls success action', async () => {
			const data = {
				results: [{
					name: 'luke'
				}]
			}

			axios.get = jest.fn(() => Promise.resolve({
				data
			}))
			const mockDisp = jest.fn(e => e)
			const mockSuccess = jest.fn()
			mockSuccess.mockImplementationOnce(s => s)

			mockSuccess.mockReturnThis(s => s)
			const config = {
				success: mockSuccess
			}
			const actual = await api(mockDisp, config)
			expect(axios.get).toHaveBeenCalledTimes(1)
			expect(mockDisp).toHaveBeenCalledWith({
				'results': [{
					'name': 'luke'
				}]
			})
			expect(mockSuccess).toHaveBeenCalledWith(data)

		})

		it('calls failure action', async () => {
			axios.get = jest.fn(() => Promise.resolve({
				error: 'faaail'
			}))
			const mockDisp = jest.fn(e => e)
			const mockFail = jest.fn()
			mockFail.mockImplementationOnce(s => s)

			mockFail.mockReturnThis(s => s)
			const config = {
				fail: mockFail
			}
			const actual = await api(mockDisp, config)
			expect(axios.get).toHaveBeenCalledTimes(1)
			expect(mockFail).toHaveBeenCalledWith({
				error: 'faaail'
			})

		})
	})


})