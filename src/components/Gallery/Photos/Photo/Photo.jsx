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
    // upload about me component
  };

  const divStyle = {
    backgroundImage: `url(${props.photo.url})`,
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
    <Col lg="6" className={classes.imgWrapper}>
      <div
        style={divStyle}
        title={props.photo.title}
        className={classes.photo}
        onMouseOver={handleOver}
        data-id={props.photo.id}
        onMouseLeave={handleLeave}
      >
        <Button
          variant="info"
          className={classes.click}
          style={parseInt(showId) === props.photo.id ? pStyleActive : pStyle}
          data-id={props.photo.id}
          title=""
          onClick={handleClick}
        >
          Подробнее
        </Button>
      </div>
    </Col>
  );
};

export default Photo;
