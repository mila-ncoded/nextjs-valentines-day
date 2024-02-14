"use client";

import { useState } from "react";
import styles from "./no-button.module.css";

export default function NoButton() {
  const [x, setX] = useState(54);

  function mouseOver() {
    setX(Math.random() * 100);
  }

  let noStyle = {
    left: x + "%",
  };

  return (
    <div className={styles.container}>
      <button onMouseOver={mouseOver} style={noStyle} className={styles['no-button']}>
        No
      </button>
    </div>
  );
}
