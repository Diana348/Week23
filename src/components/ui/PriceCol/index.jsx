import React from "react";
import styles from "./PriceCol.module.css";

const PriceCol = ({ name, price, speed, info, isChosen, titleColor }) => {
  return (
    <div className={isChosen ? styles.speedBlockActive : styles.speedBlock}>
      <h2 style={{ backgroundColor: titleColor }} className={styles.title}>
        {name}
      </h2>
      <div className={styles.priceBlock}>
        <p>руб</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.textDown}>/мес</p>
      </div>
      <p>{speed}</p>
      <p>{info}</p>
    </div>
  );
};

export default PriceCol;
