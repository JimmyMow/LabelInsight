import { ADD_PHOTO, ADD_PHOTOS, UPDATE_PHOTOS } from '../constants/ActionTypes'

const initialState = []

export default function photos(state = initialState, action) {
  switch (action.type) {
    case ADD_PHOTOS:
      return action.photos

    case UPDATE_PHOTOS:
      return state.map((photo) => {
         if (photo.id === action.photo.id) { return action.photo }
         return photo
      })
    default:
      return state
  }
}
