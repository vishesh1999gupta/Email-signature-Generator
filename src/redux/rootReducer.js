import {combineReducers} from 'redux'
import mainReducer from './reducers/mainReducer'
import socialReducer from './reducers/socialReducer'
import styleReducer from './reducers/styleReducer'

const rootReducer = combineReducers({
    main: mainReducer,
    social: socialReducer,
    style: styleReducer
})

export default rootReducer