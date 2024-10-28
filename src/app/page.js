"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Samiran");
  const fruit = (item) => {
    // alert(item)
    setName(item);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Events , Function and State {name}</h1>
        <button onClick={() => fruit("Swastik")}>Click Me</button>
      </main>
    </div>
  );
}
