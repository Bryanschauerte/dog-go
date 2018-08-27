import constants from './constants'

const defaultState = {
	activeView: 0
}
export default (state = defaultState, action) => {
	switch (action.type) {
	case constants.changeActive:
		return {
			...state,
			activeView: action.payload
		}
	default:
		return state
	}

}