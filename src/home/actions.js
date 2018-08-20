import constants from './constants'


export const changeUIState = (activeView) => {
	return {
		type: constants.changeActive,
		payload: activeView
	}
}