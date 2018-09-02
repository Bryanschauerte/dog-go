import constants from './constants'

const defaultState = {
	activeTab: 0
}
export default (state = defaultState, action) => {
	switch (action.type) {
	case constants.changeActive:
		return {
			...state,
			activeTab: action.payload
		}
	default:
		return state
	}
}
