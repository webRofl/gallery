import React from 'react';
import { Row } from 'react-bootstrap';
import Preloader from '../../../common/Preloader/Preloader';
import classes from './Photos.module.css';
import Photo from './Photo/Photo';
import { useState } from 'react';
import PhotoInfo from './PhotoInfo/PhotoInfo';

const Photos = (props) => {
  const [modalId, setModalId] = useState(-1);

  if (props.isFetching) {
    return <Preloader />;
  }

  if (!props.photos) {
    return (
      <div className={classes.selectCategory}>
        <h1>Выберите категорию</h1>
      </div>
    );
  }

  return (
    <>
      <Row className={classes.photosRow}>
        {props.photos.map((photo, index) => {
          if (index === parseInt(modalId) - 1)
            return (
              <PhotoInfo photo={photo} setModalId={setModalId} key={photo.id} />
            );
          return (
            <Photo
              photo={photo}
              key={photo.id}
              setModalId={setModalId}
              index={index}
              modalId={modalId}
            />
          );
        })}
      </Row>
    </>
  );
};

export default Photos;
