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
        <Card.Title>{props.photo.title}</Card.Title>
        <Card.Text>
          photo id: {props.photo.id}
          <br />
          photo url:{' '}
          <a href={props.photo.url} target="_blank" rel="noreferrer">
            {props.photo.url}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PhotoInfo;
