import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import classes from './Gallery.module.css';
import Photos from './Photos/Photos';

const Gallery = (props) => {
  const [selected, setSelected] = useState(-1);

  const buttons = [
    {
      id: 1,
      color: 'primary',
    },
    {
      id: 2,
      color: 'success',
    },
    {
      id: 3,
      color: 'danger',
    },
    {
      id: 4,
      color: 'secondary',
    },
  ];

  if (props.categories[selected]?.photos) {
    props.setIsFetching(false);
  }

  const handleClick = (event) => {
    setSelected(event.target.dataset.id);
    props.setIsFetching(true);
    props.updatePhotos(event.target.dataset.id);
  };

  return (
    <>
      <Row className={classes.categories}>
        <Col style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '20px' }}>Категории</h1>
          {buttons.map((btn) => {
            return (
              <Button
                variant={
                  parseInt(selected) === btn.id
                    ? btn.color
                    : `outline-${btn.color}`
                }
                data-id={btn.id}
                onClick={handleClick}
                className={classes.categoryBtn}
                key={btn.id}
              >
                {btn.id}
              </Button>
            );
          })}
        </Col>
      </Row>
      <Photos
        photos={props.categories[selected]?.photos}
        isFetching={props.isFetching}
      />
    </>
  );
};

export default Gallery;
