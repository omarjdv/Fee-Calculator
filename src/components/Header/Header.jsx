import React from 'react'
import styles from './Header.module.scss'

const Header = ({label}) => {
   return (<div className={styles.header}>{label}</div>)
};

export default Header