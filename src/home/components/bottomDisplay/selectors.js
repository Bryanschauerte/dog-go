import { prop, compose } from 'rambda'
import namespace from './constants'

export const home = state => prop('home', state)
export const bottomDisplay = state => prop(namespace.stateName, home(state))
export const activeTab = compose(
	prop('activeTab'),
	bottomDisplay
)
