// import api from '../../../../api/api'
import urls from './config'

export const getPeople = (sucessAction, failAction, id) => {


	return (dispatch, getState, api) => {
		let config = {
			url: `${urls.swapi.base}`,
			success: sucessAction,
			fail: failAction
		}
		if (id) config.url = `${urls.swapi.base}${id}`

		return api(dispatch, config)
	}


}