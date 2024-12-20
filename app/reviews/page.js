"use client";
import React, { useState } from "react";
import styles from "./reviews.module.css";
import Matches from "@/components/Matches/Matches";
const page = () => {
  const reviews = [
    { id: 1, username: "John Doe", review: "Great app!", rating: 5 },
    { id: 2, username: "Jane Smith", review: "Needs improvement.", rating: 3 },
    { id: 3, username: "Mike Ross", review: "Very user-friendly.", rating: 4 },
    { id: 4, username: "George Pap", review: "Great app!", rating: 5 },
    { id: 5, username: "John Perd", review: "Needs improvement.", rating: 3 },
    { id: 6, username: "Nikos Prss", review: "Very user-friendly.", rating: 4 },
  ];

  const [SearchTerm, setSearchTerm] = useState("");
  const [showElement, setShowElement] = useState(false);

  const HandleAddRating = (myid) => {
    setShowElement(true);
    console.log(myid);
  };

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
            <Matches minHeight="641px">
              <ul>
                <li>Hello</li>
              </ul>
            </Matches>
          </div>
          <div className={styles.results}>
            <h2>Results</h2>
            <Matches
              listItems={reviews}
              searchTerm={SearchTerm}
              width="500px"
              minHeight="641px"
            />
          </div>
          <div className={styles.leaderboard}>
            <h3>Leaderboard</h3>
            <Matches minHeight="641px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
