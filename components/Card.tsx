"use client";
import Link from "next/link";
import styles from "../styles/Card.module.css";
import { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  isTopPick: boolean;
}

const Card = ({ id, title, description, isTopPick }: CardProps) => {
  const [rating, setRating] = useState(0);
  return (
    <div className={styles.card}>
      <div className={styles.title_container}>
        <h2>{title}</h2>
        {isTopPick ? (
          <img
            className={styles.topPicks}
            src="https://apiportal.axisbank.com/portal/sites/portal.apiportal.axisbank.com/modules/custom_product_recommendation/images/Group.png"
          ></img>
        ) : (
          <></>
        )}
      </div>

      <p>{description}</p>
      <div className={styles.rating}>
        <p className={styles.ratingP}>Rating:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              onClick={() => setRating(star)}
            />
            <span
              className={`${styles.star} ${star <= rating ? styles.filled : ""}`}
            >
              &#9733;
            </span>
          </label>
        ))}
      </div>

      <Link href={`/card/${id}`}>
        <button className={styles.viewMore}>View More</button>
      </Link>
    </div>
  );
};

export default Card;
