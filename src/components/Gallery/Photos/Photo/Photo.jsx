import React from 'react';
import { Col, Button } from 'react-bootstrap';
import classes from './Photo.module.css';
import { useState } from 'react';

const Photo = (props) => {
  const [showId, setShowId] = useState(-1);

  const handleOver = (event) => {
    setShowId(event.target.dataset.id);
  };

  const handleLeave = () => {
    setShowId(-1);
  };

  const handleClick = (event) => {
    props.setModalId(event.target.dataset.id);
  };

  const divStyle = {
    backgroundImage: `url(${props.photo.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '600px',
    height: '600px',
    marginBottom: '25px',
    position: 'relative',
  };

  const pStyleActive = {
    opacity: '1',
  };

  const pStyle = {
    opacity: '0',
  };

  return (
    <Col className={classes.imgWrapper} xxl="4" xl="6" lg="12" md="12" sm="12">
      <div
        style={divStyle}
        title={props.photo.title}
        className={classes.photo}
        onMouseOver={handleOver}
        data-id={props.index + 1}
        onMouseLeave={handleLeave}
      >
        {props.modalId === -1 ? (
          <Button
            variant="info"
            className={classes.click}
            style={parseInt(showId) === props.index + 1 ? pStyleActive : pStyle}
            data-id={props.index + 1}
            title=""
            onClick={handleClick}
          >
            Подробнее
          </Button>
        ) : null}
      </div>
    </Col>
  );
};

export default Photo;
