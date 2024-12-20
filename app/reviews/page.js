"use client"
import React, { useState } from 'react'
import styles from "./reviews.module.css"
import Matches from '@/components/Matches/Matches'
const page = () => {


  const reviews = [
    { id: 1, username: "John Doe", review: "Great app!", rating: 5 },
    { id: 2, username: "Jane Smith", review: "Needs improvement.", rating: 3 },
    { id: 3, username: "Mike Ross", review: "Very user-friendly.", rating: 4 },
    { id: 4, username: "George Pap", review: "Great app!", rating: 5 },
    { id: 5, username: "John Perd", review: "Needs improvement.", rating: 3 },
    { id: 6, username: "Nikos Prss", review: "Very user-friendly.", rating: 4 },
  ];

  const [SearchTerm,setSearchTerm] = useState("");
  const [filteredReviews,setfilteredReviews] = useState(reviews);
  const [showElement,setShowElement]= useState(false);
  const handleSearchTermChange = (e) =>{
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(e.target.value);

    if(term===""){
      setfilteredReviews(reviews);

    }else{
      const filtered = reviews.filter((reviews)=>reviews.username.includes(term));
      setfilteredReviews(filtered);
    }
  }
  const HandleAddRating = (myid) => {
    setShowElement(true);
    console.log(myid);
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.search}>
          <input type='text'
            placeholder='Search a User' 
            className={styles.searchme}
            value={SearchTerm}
            onChange={handleSearchTermChange}
          />
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
            <ul>
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review) => (
                  <li key={review.id} style={{ marginBottom: "15px" }}>
                    <strong className={styles.username}>{review.username}: {review.review} (Rating:{" "}
                    {review.rating}/5)</strong> 
                    <button className={styles.button} onClick={()=>HandleAddRating(review.id)}>
                      Add Rating
                    </button>
                    {showElement&&<span style={{marginLeft:"10px"}}></span>}
                  </li> 
              ))
              ) : (
                <p>No reviews found.</p>
              )}
            </ul>
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
