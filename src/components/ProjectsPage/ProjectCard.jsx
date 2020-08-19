import React from 'react'
import projectsData from '../../projects.json'
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {
  const projectUrl = props.subMenu.location.pathname
  let projectsArr = []

  if (projectUrl === '/projects/html-css') {
    projectsData.htmlCss.forEach(item => {
      projectsArr.push(item)
    })
  }
  if (projectUrl === '/projects/react') {
    projectsData.react.forEach(item => {
      projectsArr.push(item)
    })
  }
  if (projectUrl === '/projects/mern') {
    projectsData.mern.forEach(item => {
      projectsArr.push(item)
    })
  }

  if (projectsArr.length === 0) {
    if (projectUrl === '/projects/html-css' || projectUrl === '/projects/react' || projectUrl === '/projects/mern') {
      return <h1>Soon coming.....</h1>
    }
  }

  return (
      projectsArr.map(card => {
        return (
            <div key={card.id} className={styles.card}>
              <div className={styles.imgAndText}>
                <img src={card.img} alt=''/>
                <h3>{card.projectName}</h3>
              </div>
              <div className={styles.aboutProject}>
                <p>{card.aboutText}</p>
              </div>
              <div className={styles.buttons}>
                <a target='_blank' href={card.GitHub} rel='noopener noreferrer'>GITHUB</a>
                <a target='_blank' href={card.liveDemo} rel='noopener noreferrer'>LIVE DEMO</a>
              </div>
            </div>
        )
      })
  )

}

export default ProjectCard
