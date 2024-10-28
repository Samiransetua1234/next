'use client'
import styles from "./page.module.css";

export default function Home() {
  const fruit = (item) =>{
    alert(item)
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Events , Function and State</h1>
        <button onClick={()=> fruit('apple')}>Click Me</button>
      </main>
     
    </div>
  );
}


