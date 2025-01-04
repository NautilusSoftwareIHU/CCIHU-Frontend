"use client";
import React, { useState } from "react";
import styles from "./reviews.module.css";
import Usericon from "@/components/Usericon/Usericon";
import Matches from "@/components/Matches/Matches";
const page = () => {
  const reviews = [
    { id: 1, username: "John Doe", review: "Great app!", rating: 5 },
    { id: 2, username: "Jane Smith", review: "Needs improvement.", rating: 3 },
    { id: 3, username: "Mike Ross", review: "Very user-friendly.", rating: 4 },
    { id: 4, username: "George Pap", review: "Great app!", rating: 5 },
    { id: 5, username: "John Perd", review: "Needs improvement.", rating: 3 },
    { id: 6, username: "Nikos Prss", review: "Very user-friendly.", rating: 4 },
    { id: 7, username: "John Passias", review: "Great Driver!", rating: 5 },
    { id: 8, username: "Jane Smith", review: "Needs improvement.", rating: 3 },
    { id: 9, username: "Mike Ross", review: "Very friendly.", rating: 4 },
    { id: 10, username: "George Pap", review: "Great app!", rating: 5 },
    { id: 11, username: "John Perd", review: "Needs improvement.", rating: 3 },
  {
      id: 12,
      username: "Nikos Prss",
      review: "Very user-friendly.",
      rating: 4,
    },
  ];

  const getOrderedReviews = (reviews) => {
    return [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 10);
  };

  const getLatestMatches = (reviews)=>{
    return[...reviews].sort((a,b)=>a.rating-b.rating).slice(0,5);
  }

  const [SearchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className={styles.page}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search a User"
            className={styles.searchme}
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.latestmatches}>
            <h3>Latest Matches</h3>
            <Matches 
              listItems={getLatestMatches(reviews)}
              minHeight="641px"
              renderMethod={(item)=>(
              
             <div><Usericon/><p><strong>{item.username}</strong></p></div>
          
              )}
            />
          </div>
          <div className={styles.results}>
            <h2>Results</h2>
            <Matches
              listItems={reviews}
              searchTerm={SearchTerm}
              width="500px"
              minHeight="641px"
              renderMethod={(item) => (
                <>
                  <h4>{item.username}</h4>
                  <p>{item.review}</p>
                  <p>Rating: {item.rating}/5</p>
                </>
              )}
            />
          </div>

          <div className={styles.leaderboard}>
            <h3>Leaderboard</h3>
            <Matches
              listItems={getOrderedReviews(reviews)}
              minHeight="641px"
              renderMethod={(item) => (
                <p>
                  <strong>{item.username}</strong>: {item.rating}/5
                </p>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
