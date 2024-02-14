"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NoButton from "@/components/no-button";
import valentinesImage from "@/assets/main.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const handleYesClick = () => toast("Right answer!");

  return (
    <div>
      <div className={styles.image}>
        <Image src={valentinesImage.src} fill alt="" />
      </div>

      <div className={styles["buttons-container"]}>
        <button className={styles["yes-button"]} onClick={handleYesClick}>
          Yes
        </button>
        <NoButton />
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}
