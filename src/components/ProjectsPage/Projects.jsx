import React from 'react'
import {NavLink} from 'react-router-dom'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.scss'

const Projects = (props) => {
  const path = props.match.path
  const location = props.location.pathname
  const subMenuItems = [
    {id: 1, name: 'HTML/CSS/JS', path: 'html-css'},
    {id: 2, name: 'REACT', path: 'react'},
    {id: 3, name: 'MERN', path: 'mern'},
  ]

  return (
      <>
        <nav className={styles.subNav}>
          <ul className={styles.subMenu}>
            {subMenuItems.map(item => {
              return (
                  <li key={item.id} className={styles.subMenuItem}>
                    <NavLink className={styles.subMenuItem_link}
                             activeClassName={styles.subMenuItem_active}
                             to={`${path}/${item.path}`}
                    >{item.name}</NavLink>
                  </li>
              )
            })}
          </ul>
        </nav>
        <div className={location === '/projects' ? styles.projectsContainerEmpty : styles.projectsContainer}>
          {location === '/projects' ? <div className={styles.hideContentDiv}><h3 className={styles.hideContent}>Here You can see all my projects</h3></div> : null}
          <ProjectCard subMenu={props}/>
        </div>
      </>
  )
}

export default Projects
