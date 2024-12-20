import React from 'react'
import styles from "./reviews.module.css"
import Matches from '@/components/Matches/Matches'
import Footer from '@/components/footer/Footer'
const page = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.search}>
          <input type='text' placeholder='Search a User' className={styles.searchme}/>
          <button className={styles.button}>Search</button>
        </div>
        <div className={styles.row}>
          <div className={styles.latestmatches}>
            <h3>Latest Matches</h3>
            <Matches>
              <ul>
                <li>
                  Hello
                </li>
              </ul>
            </Matches>
          </div>
          <div className={styles.results}>
          <h2>Results</h2>
          <div className={styles.searchresultbox}>
          </div>
          </div>
          <div className={styles.leaderboard}>
            <h3>Leaderboard</h3>
            <Matches>
            </Matches>
          </div>
      </div>
        </div>
    </>
    
  )
}

export default page
