import React, {memo} from 'react'
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = memo(function Navbar() {

  const nav = [
    {id: 1, name: 'About Me', path: '/aboutPage'},
    {id: 2, name: 'Resume/CV', path: '/resumePage'},
    {id: 3, name: 'Projects', path: '/projects'},
    {id: 4, name: 'Contact', path: '/contactPage'},
  ]

  return (
      <nav className={styles.nav}>
        <ul className={styles.navBar}>
          {nav.map((item) => <li key={item.id} className={styles.nav_item}>
            <NavLink
                className={styles.nav_link}
                to={item.path}
                activeClassName={styles.active}
            >{item.name}</NavLink></li>)}
        </ul>
      </nav>
  )
})

export default Navbar
