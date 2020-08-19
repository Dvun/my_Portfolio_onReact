import React, {memo} from 'react'
import styles from './ContactPage.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneSquareAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import photo from '../../assets/me.jpg'

const ContactPage = memo(function ContactPage() {

  return (
      <div className={styles.container}>
        <div className={styles.insideContainer}>
          <div className={styles.leftSide}>
            <div className={styles.leftSideContent}>
              <h1 className={styles.name}>Roman Seveljov</h1>
              <img src={photo} style={{borderRadius: '50%'}} alt='me'/>
            </div>
          </div>
          <div className={styles.rightSide}>
            <h1>Contact Me</h1>
            <div className={styles.contact}>
                <a href='tel:+358405920054' className={styles.contactItem}>
                  <FontAwesomeIcon className={styles.svgIcon} icon={faPhoneSquareAlt}/>
                  +358 405920054
                </a>
            </div>
            <div className={styles.contact}>
                <a href='mailto:roman084@gmx.com' className={styles.contactItem}>
                  <FontAwesomeIcon className={styles.svgIcon} icon={faEnvelope}/>
                  roman084@gmx.com
                </a>
            </div>
            <div className={styles.contact}>

              <a href='tg://resolve?domain=Slider84' className={styles.contactItem}>
                <FontAwesomeIcon  className={styles.svgIcon} icon={faTelegram} />
                @Slider84
              </a>
            </div>
          </div>
        </div>
      </div>
  )
})

export default ContactPage
