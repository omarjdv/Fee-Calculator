import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ label, amount }) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.label}>{label}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.feeButton}>OBTENÉ CRÉDITO</div>
        <div className={styles.feeDetails}>VER DETALLE DE CUOTAS</div>
      </div>
    </>
  );
};

export default Footer;
