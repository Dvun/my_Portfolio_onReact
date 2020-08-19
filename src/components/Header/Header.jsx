import React, {memo, useState} from 'react'
import styles from './Header.module.scss'
import DrawerToggleButton from './Navbar/burgerMenu/DrawerToggleButton'
import SideDrawer from './Navbar/burgerMenu/SideDrawer'
import Backdrop from './Navbar/Backdrop/backdrop'
import Navbar from './Navbar/Navbar'
import {Link} from 'react-router-dom'


const Header = memo(function Header() {

  const title = 'My Portfolio'
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(true)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backDropClickHandler}/>
  }

  return (
      <header>
        <div className={styles.header}>
          <div className={styles.header_logo}><Link to='/'>{title}</Link></div>
          <Navbar/>
          <SideDrawer show={sideDrawerOpen}/>
          {backdrop}
          <div className={styles.toggleBtnHide}>
            <DrawerToggleButton click={drawerToggleClickHandler}/>
          </div>
        </div>
      </header>
  )
})

export default Header
