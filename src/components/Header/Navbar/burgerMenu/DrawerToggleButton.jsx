import React from 'react'
import styles from './DrawerToggleButton.module.scss'

const DrawerToggleButton = (props) => {


  return (
      <button className={styles.toggleButton} onClick={props.click}>
        <div className={styles.toggleButton__line}/>
        <div className={styles.toggleButton__line}/>
        <div className={styles.toggleButton__line}/>
      </button>
  )
}


export default DrawerToggleButton
