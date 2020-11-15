import React from 'react';
import { ExternalLink } from '../../components';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin-logo-vector.svg';
import styles from './Footer.module.scss';

const Footer = ({ label, amount, signature }) => {
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
      <div className={styles.contacts}>
        <div className={styles.signature}>Created by: {signature}</div>
        <ExternalLink to="https://www.linkedin.com/in/omarjdv/">
          <div className={styles.icon}>
            <LinkedinIcon />
          </div>
        </ExternalLink>
      </div>
    </>
  );
};

export default Footer;
