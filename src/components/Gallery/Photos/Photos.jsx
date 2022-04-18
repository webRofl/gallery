import React from 'react';
import { Row } from 'react-bootstrap';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './Photos.module.css';
import Photo from './Photo/Photo';

const Photos = (props) => {
  if (props.isFetching) {
    return <Preloader />;
  }

  if (!props.photos) {
    return <h1>Выберите категорию</h1>;
  }

  return (
    <>
      <Row className={classes.photosRow}>
        {props.photos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </Row>
    </>
  );
};

export default Photos;
