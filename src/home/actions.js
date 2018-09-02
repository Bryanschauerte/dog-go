import constants from './constants'


export const changeActiveTab = (activeTab) => {
	return {
		type: constants.changeActive,
		payload: activeTab
	}
}