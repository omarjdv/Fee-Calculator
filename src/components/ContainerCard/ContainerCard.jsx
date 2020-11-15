import React from 'react'
import styles from './ContainerCard.module.scss'

const ContainerCard = ({children}) => {
   return (<div className={styles.container}>{children}</div>)
};

export default ContainerCard