import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import classes from './PhotoInfo.module.css';

const PhotoInfo = (props) => {
  return (
    <Card className={classes.cardImageBlock} lg="6">
      <CloseButton onClick={() => props.setModalId(-1)} />
      <Card.Img
        variant="top"
        src={props.photo.url}
        className={classes.cardImg}
      />
      <Card.Body>
        <Card.Title>категория {props.photo.albumId}</Card.Title>
        <Card.Text>{props.photo.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PhotoInfo;
