import constants from './constants'

export const changeUIState = activeTab => {
	return {
		type: constants.changeActive,
		payload: activeTab
	}
}
