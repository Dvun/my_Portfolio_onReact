import React from 'react'
import './SideDrawer.scss'
import {Link} from 'react-router-dom'

const SideDrawer = (props) => {
  let drawerClasses = ['side-drawer']
  if (props.show) {
    drawerClasses = ['side-drawer open']
  }
  return (
      <nav className={drawerClasses}>
        <ul>
          <li><Link to='/aboutPage'>About Me</Link></li>
          <li><Link to='/resumePage'>Resume/CV</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contactPage'>Contact</Link></li>
        </ul>
      </nav>
  )


}


export default SideDrawer
