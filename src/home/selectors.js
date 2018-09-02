import {
	prop,
	compose
} from 'rambda'
import namespace from './constants'


export const base = (state) => prop('home', state)
export const home = state => prop(namespace.stateName, base(state))
// export const home = state => prop(namespace.stateName, base(state))
export const activeTab = compose(prop('activeTab'), home)