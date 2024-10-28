import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page!!!</h1>
        <User name='Samiran'/>
      </main>
     
    </div>
  );
}

const User = ({name}) =>{
  return (
    <div>
      <h2>User is {name}</h2>
    </div>
  )
}
