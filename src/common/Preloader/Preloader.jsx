import React from 'react';
import preloaderImg from '../../assets/images/preloader.gif';
import classes from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={classes.preloaderBlock}>
      <img src={preloaderImg} alt="preloader" className={classes.preloader} />
    </div>
  );
};

export default Preloader;
