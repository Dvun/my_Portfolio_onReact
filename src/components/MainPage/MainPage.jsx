import React from 'react'
import styles from './MainPage.module.scss'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import AboutPage from '../AboutPage/AboutPage'
import ResumePage from '../ResumePage/ResumePage'
import ContactPage from '../ContactPage/ContactPage'
import Projects from '../ProjectsPage/Projects'
const MainPage = () => {

  return (
      <section className={styles.section}>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/aboutPage' component={AboutPage}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/resumePage' component={ResumePage}/>
          <Route path='/contactPage' component={ContactPage}/>
        </Switch>
      </section>
  )
}

export default MainPage
