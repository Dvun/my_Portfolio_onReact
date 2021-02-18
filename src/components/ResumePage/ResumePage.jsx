import React from 'react'
import styles from './ResumePage.module.scss'
import GoogleDocsViewer from 'react-google-docs-viewer/src'

const ResumePage = () => {

  return (
      <div className={styles.container}>
        {/*<iframe className={styles.cv} src="https://docs.google.com/viewer?srcid=[1Dfz3EtJxlSBOimfKURB6fFRcn3p8hyPa]&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="auto" height="auto" title='cv'/>*/}
        <GoogleDocsViewer
          width="600px"
          height="780px"
          fileUrl="https://drive.google.com/file/d/1Dfz3EtJxlSBOimfKURB6fFRcn3p8hyPa/view?usp=sharing"
        />
      </div>
  )
}

export default ResumePage
