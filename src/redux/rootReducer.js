import {combineReducers} from 'redux'
import addonsReducer from './reducers/addonsReducer'
import ctaReducer from './reducers/ctaReducer'
import mainReducer from './reducers/mainReducer'
import socialReducer from './reducers/socialReducer'
import styleReducer from './reducers/styleReducer'

const rootReducer = combineReducers({
    main: mainReducer,
    social: socialReducer,
    style: styleReducer,
    cta: ctaReducer,
    addons: addonsReducer
})

export default rootReducer