import React, {memo} from 'react'
import styles from './SocialLinks.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const SocialLinks = memo(function SocialLinks() {
  const socialTitle = 'FrontEnd Web Developer'
  const socialText = 'HTML/CSS | Bootstrap | JavaScript | React.JS'
  const linksAndUrls = [
    {id: 1, url: 'https://www.linkedin.com/in/roman-sheveljov-696615192/', icon: faLinkedin},
    {id: 2, url: 'https://github.com/Dvun', icon: faGithubSquare},
    {id: 3, url: 'https://www.facebook.com/rsheveljov', icon: faFacebookSquare},
  ]

  return (
      <div className={styles.banner_text}>
        <h2>{socialTitle}</h2>
        <hr/>
        <p>{socialText}</p>
        <div className={styles.social_links}>
          {
            linksAndUrls.map(item => {
              return (
                  <a href={item.url}
                     target='_blank'
                     rel='noopener noreferrer'
                     key={item.id}
                  >
                    <FontAwesomeIcon className={styles.links} icon={item.icon}/>
                  </a>
              )
            })
          }
        </div>
      </div>
  )
})

export default SocialLinks
