import React from 'react'
import styles from './ResumePage.module.scss'

const ResumePage = () => {

  return (
      <div className={styles.container}>
        <iframe className={styles.cv} src="//drive.google.com/file/d/1q1rl19XBOvSbdd71HBHAocUP36uF_bjV/preview" width="auto" height="auto" title='cv'/>
      </div>
  )
}

export default ResumePage
