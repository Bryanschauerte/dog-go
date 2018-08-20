import constants from './constants'

const defaultState = {
	activeView: 0
}
export const uiState = (state = defaultState, action) => {
	switch (action.type) {
	case constants.changeActive:
		return {
			...state,
			activeView: action.payload
		}
	}

	return state
}