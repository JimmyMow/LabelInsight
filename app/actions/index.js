import * as types from '../constants/ActionTypes'

export function addPhoto(photo) {
  return { type: types.ADD_PHOTO, photo: photo }
}

export function updatePhotos(photo) {
  return { type: types.UPDATE_PHOTOS, photo: photo }
}

export function removePhoto() {
  return { type: types.REMOVE_PHOTO }
}

export function addPhotos(photos) {
  return { type: types.ADD_PHOTOS, photos: photos }
}
