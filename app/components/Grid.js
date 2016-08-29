import React, { Component, PropTypes } from 'react'
import Photo from './Photo'
import Modal from 'react-modal'
import PhotoModal from './PhotoModal'

class Grid extends Component {
   constructor(props, context) {
     super(props, context);
   }

   photoClicked(photo) {
      this.props.actions.addPhoto(photo)
   }

   closeModal() {
      this.props.actions.removePhoto()
   }

   updatePhotos(photo) {
      this.props.actions.updatePhotos(photo)
   }

   render() {
      const { photo, photos, actions } = this.props
      return (
         <section className='grid'>
            {
              photo.hasOwnProperty('id') ? <PhotoModal photo={photo} close={this.closeModal.bind(this)} update={this.updatePhotos.bind(this)} /> : null
            }
            <ul className='photos'>
               {
                  photos.map((photo, i) => {
                     return <Photo key={i} photo={photo} clicked={this.photoClicked.bind(this)} />
                  })
               }
            </ul>
         </section>
      )
   }
}

Grid.propTypes = {
  photo: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Grid
