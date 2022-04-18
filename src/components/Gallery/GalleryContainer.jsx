import React from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';
import { updatePhotos, setIsFetching } from '../../redux/galleryReducer';

const mapStateToProps = (state) => ({
  categories: state.gallery.categories,
  isFetching: state.gallery.isFetching,
});

export default connect(mapStateToProps, { updatePhotos, setIsFetching })(
  Gallery
);
