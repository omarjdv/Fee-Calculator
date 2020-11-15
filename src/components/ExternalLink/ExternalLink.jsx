import React from 'react';
import styles from './ExternalLink.module.scss';

const ExternalLink = ({ children, to }) => {
  return (
    <a className={styles.link} href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
