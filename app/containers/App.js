import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { callApi } from '../api/index';
import * as PhotoActions from '../actions';
import Grid from '../components/Grid';
import Header from '../components/Header';

class App extends Component {
   componentWillMount() {
      try {
        const lsPhotos = localStorage.hasOwnProperty('labelInsight') ? JSON.parse(localStorage.labelInsight) : false
        this.props.actions.addPhotos(lsPhotos.photos)
      }
      catch (e) {
        callApi().then((photos) => {
          this.props.actions.addPhotos(photos.slice(0, 25))
        })
      }
   }

   render() {
      const { photo, photos, actions } = this.props
      return (
         <div className='container'>
            <Header />
            {
              this.props.photos.length > 0 ?
              <Grid photo={photo} photos={photos} actions={actions} />
              :
              <div className='loader'>
                <i className='fa fa-spin fa-circle-o-notch' aria-hidden="true"></i>
              </div>
            }
         </div>
      );
   }
}

App.propTypes = {
  photo: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    photo: state.photo,
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PhotoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

