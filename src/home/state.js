import {
	combineReducers,
} from 'redux'

import bottomDisplay from './components/bottomDisplay/reducer'
import bottomConst from './components/bottomDisplay/constants'
import topDisplay from './components/topDisplay/reducer'
import topConst from './components/topDisplay/constants'

export default combineReducers({
	[bottomConst.stateName]: bottomDisplay,
	[topConst.stateName]: topDisplay
})