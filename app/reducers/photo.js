import { ADD_PHOTO, REMOVE_PHOTO } from '../constants/ActionTypes'

const initialState = {}

export default function photo(state = initialState, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return new Object(action.photo)

    case REMOVE_PHOTO:
      return new Object()

    default:
      return state
  }
}
