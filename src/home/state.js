import {
	combineReducers,
} from 'redux'

import bottomDisplay from './components/bottomDisplay/reducer'
import bottomConst from './components/bottomDisplay/constants'
import topDisplay from './components/topDisplay/reducer'
import topConst from './components/topDisplay/constants'
import home from './reducer'
import homeConst from './constants'

export default combineReducers({
	[homeConst.stateName]: home,
	[bottomConst.stateName]: bottomDisplay,
	[topConst.stateName]: topDisplay
})