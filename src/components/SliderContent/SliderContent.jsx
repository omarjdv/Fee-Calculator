import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './SliderContent.module.scss';

const SliderContent = ({ title, amountSelected, onChange, min, max, marks, symbol }) => {
  return (
    <>
      <div className={styles.totalAmount}>
        <div className={styles.title}>{title}</div>
        <div className={styles.amount}>{amountSelected}</div>
      </div>
      <div className={styles.sliderContainer}>
        <Slider min={min} max={max} onChange={onChange} marks={marks} defaultValue={3} />
      </div>
    </>
  );
};

export default SliderContent;
