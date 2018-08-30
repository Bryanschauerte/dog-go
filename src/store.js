import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import {
	uiState
} from './uiState/reducer'
import home from './home/state'
import api from './api/api'

const logger = store => next => action => {
	/*eslint-disable */

	console.log('dispatching', action)
	let result
	if (action) result = next(action)

	console.log('next state', store.getState())
	/*eslint-enable */
	return result
}


const root = combineReducers({
	uiState,
	home
})
export const store = createStore(root, applyMiddleware(thunk.withExtraArgument(api), logger))