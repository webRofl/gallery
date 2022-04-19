import React from 'react';
import errorImg from '../../assets/images/error-404.png';
import classes from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={classes.imgWrapper}>
      <img src={errorImg} alt="error" />
    </div>
  );
};

export default PageNotFound;
