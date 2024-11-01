import React from "react";

/* Local dependencies*/
import flame from "../../assets/IMG/flame.svg";
import timeLogo from "../../assets/IMG/timesvg.svg";
import styles from "./styles.module.scss";
interface ICard {
  image: string;
  title: string;
  description: string;
  rating: number;
  duration: string;
}
export default function CourseCard({
  image,
  title,
  description,
  rating,
  duration,
}: ICard) {
  const onViewDetails = () => {
    console.log("View course details");
  };
  return (
    <div className={styles.courseCard}>
      <img className="img" src={image} alt="" />
      <div>
        <h4 className=" ">{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.text}>
        <img className={styles.icon} src={timeLogo} alt="" />
        <p>{duration} hours</p>
      </div>
      <div className={styles.text}>
        <img className={styles.icon} src={flame} alt="" />
        <p>{rating}</p>
      </div>
      <button onClick={onViewDetails}>View course</button>
    </div>
  );
}
