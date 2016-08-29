import { combineReducers } from 'redux'
import photo from './photo'
import photos from './photos'

const rootReducer = combineReducers({
  photo,
  photos
})

export default rootReducer
