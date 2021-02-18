import React from 'react'
import styles from './ResumePage.module.scss'

const ResumePage = () => {

  return (
      <div className={styles.container}>
        <iframe className={styles.cv} src="//drive.google.com/file/d/1Dfz3EtJxlSBOimfKURB6fFRcn3p8hyPa/view?usp=sharing" width="auto" height="auto" title='cv'/>
      </div>
  )
}

export default ResumePage
