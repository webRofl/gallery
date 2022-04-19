import React, { useState } from 'react';
import { Card, CloseButton, Col, Placeholder } from 'react-bootstrap';
import classes from './PhotoInfo.module.css';

const PhotoInfo = (props) => {
  const [delay, setDelay] = useState(true);

  setTimeout(() => {
    setDelay(false);
  }, 500);

  if (delay) {
    return (
      <Col xxl="4" xl="6" lg="12" md="12" sm="12">
        <Card style={{ height: '600px', border: 'none' }}>
          <CloseButton onClick={() => props.setModalId(-1)} />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={12} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
              <Placeholder xs={8} />
              <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} /> <Placeholder xs={8} />{' '}
              <Placeholder xs={8} />
              <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <Col xxl="4" xl="6" lg="12" md="12" sm="12">
      <Card className={classes.cardImageBlock}>
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
    </Col>
  );
};

export default PhotoInfo;
