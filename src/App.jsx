import React from 'react'
import styles from './style'

import {Navbar, Hero, Stats, Business, Billing,  CardDeal, Testimonials, Clients, CTA, Footer} from './components/index'

const App = () =>
(
  <div className=' bg-black text-white w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-black  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>

)


export default App
