import React from 'react'
import styles from './ResumePage.module.scss'
import cv from './Roman.Sheveljov.CV.pdf'



const ResumePage = () => {

  return (
      <div className={styles.container}>
        <iframe
          marginHeight={0}
          marginWidth={0}
          seamless
          className={styles.cv}
          src={cv}
          width="100%"
          height="auto"
          title='cv'
        />
      </div>
  )
}

export default ResumePage
