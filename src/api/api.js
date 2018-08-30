import axios from 'axios'

export default async (dispatch, config) => {

	config = {
		type: 'get',
		url: '',
		params: {},
		success: (s) => s,
		fail: (f) => f,
		...config

	}
	// console.log('apoi called', config, 'config') // eslint-disable-line
	const getResults = await axios[config.type](config.url, config.params)
		.catch(e => {
			return dispatch(config.fail(e))
		})


	if (getResults && getResults.data) return dispatch(config.success(getResults.data))

	return dispatch(config.fail(getResults))



}