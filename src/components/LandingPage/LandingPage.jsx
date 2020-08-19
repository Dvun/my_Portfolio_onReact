import React, {Component} from 'react'
import styles from './LandingPage.module.scss'
import SocialLinks from '../MainPage/SocialLinks/SocialLinks'
import photo from '../../assets/me.jpg'


class LandingPage extends Component{


  render() {
    return(
        <div className={styles.container}>
          <div className={styles.landing_grid}>
            <div className={styles.avatarBox}>
              <img
                  src={photo}
                  className={styles.avatar_img}
                  alt=''
              />
            </div>
            <SocialLinks/>
          </div>
        </div>
    )
  }
}

export default LandingPage
