import axios from 'axios'
import urls from './config'

export default async (dispatch, config) => {

	config = {
		type: 'get',
		url: `${urls.swapi.base}people`,
		params: {},
		success: (s) => s,
		fail: (f) => f,
		...config

	}

	const getResults = await axios[config.type](config.url, config.params)
	if (!getResults.data) return dispatch(config.fail(getResults))
	return dispatch(config.success(getResults.data))


}