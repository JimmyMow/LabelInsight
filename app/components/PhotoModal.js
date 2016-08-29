import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

class PhotoModal extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = { isEditing: false, photo: props.photo }
   }

   closeModal() {
      this.props.close()
   }

   editClicked() {
      if ( this.state.isEditing ) { this.props.update(this.state.photo) }
      this.setState({ isEditing: !this.state.isEditing })
   }

   renderEditing() {
      return <input
               className='description-input'
               type='text'
               autoFocus={true}
               value={this.state.photo.description}
               onChange={this.handleChange.bind(this)}
               />
   }

   renderView() {
     const text = this.state.photo.description || 'Write a description'
     return React.createElement('span', { className: 'description' }, text)
   }

   handleChange(event) {
      this.setState({ photo: Object.assign({}, this.state.photo, {description: event.target.value}) })
   }

   render() {
      const { photo } = this.props
      const icon = this.state.isEditing ? 'check' : 'pencil'
      return (
         <div>
            <Modal className='full-photo' isOpen={photo.hasOwnProperty('id')}>
               <div onClick={this.closeModal.bind(this)} className='close'>
                  <i className="fa fa-times" aria-hidden="true"></i>
               </div>
               <img src={photo.url} />
               <h3 className='title light'>{photo.title}</h3>
               <div>
                  {
                     this.state.isEditing ? this.renderEditing() : this.renderView()
                  }
                  <a className='description-edit' onClick={this.editClicked.bind(this)}>
                     <i className={`fa fa-${icon}`} aria-hidden="true"></i>
                  </a>
               </div>
            </Modal>
         </div>
      )
   }
}

PhotoModal.propTypes = {
  photo: PropTypes.object.isRequired
}

export default PhotoModal
