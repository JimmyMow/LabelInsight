import React, { Component, PropTypes } from 'react'

class Photo extends Component {
   clicked() {
      this.props.clicked(this.props.photo)
   }
   render() {
      const { photo } = this.props
      return (
         <li className='photo' onClick={this.clicked.bind(this)}>
            <img src={photo.thumbnailUrl} />
         </li>
      )
   }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
}

export default Photo
