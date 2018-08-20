import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux'
import {
	uiState
} from './uiState/reducer'
const logger = store => next => action => {
	/*eslint-disable */
  console.log('dispatching', action)
  let result = next(action)

  console.log('next state', store.getState())
  /*eslint-enable */
	return result
}
const root = combineReducers({
	uiState
})
export const store = createStore(root, applyMiddleware(logger))