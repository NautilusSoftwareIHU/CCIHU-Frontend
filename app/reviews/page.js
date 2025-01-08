"use client";
import React, { useState } from "react";
import styles from "./reviews.module.css";
import Usericon from "@/components/Usericon/Usericon";
import Matches from "@/components/Matches/Matches";
const page = () => {
  const reviews = [
    // θα τα παιρνουμε απο το backend
    { id: 1, username: "John Doe", review: "Great app!", rating: 5 },
    {
      id: 2,
      username: "Jane Smith",
      review: "Very useful and easy to use.",
      rating: 4,
    },
    {
      id: 3,
      username: "Mike Johnson",
      review: "Excellent performance, highly recommend!",
      rating: 5,
    },
    {
      id: 4,
      username: "Emily Davis",
      review: "Good, but needs some improvements.",
      rating: 3,
    },
    {
      id: 5,
      username: "Chris Lee",
      review: "Fantastic features and great design.",
      rating: 5,
    },
    {
      id: 6,
      username: "Sophia Brown",
      review: "Helpful app, but sometimes slow.",
      rating: 4,
    },
    {
      id: 7,
      username: "Liam Wilson",
      review: "Amazing app, worth every penny.",
      rating: 5,
    },
    {
      id: 8,
      username: "Olivia Taylor",
      review: "Pretty good, but could use more features.",
      rating: 3,
    },
    {
      id: 9,
      username: "James Anderson",
      review: "Solid app, does what it says.",
      rating: 4,
    },
    {
      id: 10,
      username: "Emma Martinez",
      review: "Highly intuitive and user-friendly.",
      rating: 5,
    },
    {
      id: 11,
      username: "Noah Thomas",
      review: "I had some issues, but customer service was great.",
      rating: 4,
    },
    {
      id: 12,
      username: "Ava Garcia",
      review: "Disappointing experience, not as advertised.",
      rating: 2,
    },
    {
      id: 13,
      username: "Lucas Martinez",
      review: "Decent app, works as expected.",
      rating: 4,
    },
    {
      id: 14,
      username: "Mia Rodriguez",
      review: "Perfect app for my needs, absolutely love it.",
      rating: 5,
    },
    {
      id: 15,
      username: "Ethan Hernandez",
      review: "Could be better, but not bad overall.",
      rating: 3,
    },
    {
      id: 16,
      username: "Isabella Clark",
      review: "Brilliant app, I use it every day.",
      rating: 5,
    },
    {
      id: 17,
      username: "Benjamin Lewis",
      review: "Too many ads, but works well otherwise.",
      rating: 3,
    },
    {
      id: 18,
      username: "Charlotte Robinson",
      review: "A lifesaver for my daily tasks.",
      rating: 5,
    },
    {
      id: 19,
      username: "Elijah Walker",
      review: "Great idea, but still needs polish.",
      rating: 4,
    },
    {
      id: 20,
      username: "Amelia Perez",
      review: "Terrible experience, would not recommend.",
      rating: 1,
    },
  ];

  const getOrderedReviews = (reviews) => {
    return [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 10);
  };

  const getLatestMatches = (reviews) => {
    return [...reviews].sort((a, b) => a.rating - b.rating).slice(0, 5);
  };

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
            {SearchTerm && SearchTerm.length > 0 ? null : (
              <>
                <h3>Latest Matches</h3>
                <Matches
                  listItems={getLatestMatches(reviews)}
                  minHeight="641px"
                  renderMethod={(item) => (
                    <div className={styles.latestitem}>
                      <div className={styles.icon}>
                        <Usericon />
                      </div>
                      <p>
                        <strong>{item.username}</strong>
                      </p>
                    </div>
                  )}
                />
              </>
            )}
          </div>
          <div className={styles.results}>
            <h2>Results</h2>
            <Matches
              listItems={reviews}
              searchTerm={SearchTerm}
              width="600px"
              minHeight="641px"
              renderMethod={(item) => (
                <>
                  <div className={styles.icon}>
                    <Usericon />
                  </div>
                  <h4>{item.username}</h4>
                  <p>{item.review}</p>
                  <p>Rating: {item.rating}/5</p>
                </>
              )}
            />
          </div>

          <div className={styles.leaderboard}>
            {SearchTerm && SearchTerm.length > 0 ? null : (
              <>
                <h3>Leaderboard</h3>
                <Matches
                  listItems={getOrderedReviews(reviews)}
                  minHeight="641px"
                  renderMethod={(item) => (
                    <div className={styles.latestitem}>
                      <div className={styles.icon}>
                        <Usericon />
                      </div>
                      <p>
                        <strong>{item.username}</strong>: {item.rating}/5
                      </p>
                    </div>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
