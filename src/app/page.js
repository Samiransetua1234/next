"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("Samiran");
  const router = useRouter()
  const navigation = (route)=>{
    router.push(route)
  }

  const fruit = (item) => {
    // alert(item)
    setName(item);
  };

  // const InnerComp=()=>{
  //   return(
  //     <h1>It is inner Component</h1>
  //   )
  // }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>Events , Function and State {name}</h1>
        <button onClick={() => fruit("Swastik")}>Click Me</button>
        <InnerComp/>
        {InnerComp()} */}
        <h1>This Is Home Page</h1>
        <Link href="/login">go to login </Link>
        <br />
        <Link href="/about">go to about </Link>
        <br />
        <br />
        <button onClick={() => navigation("/login")}>Login</button>
        <br/>
        <button onClick={() => navigation("/about")}>About</button>
      </main>
    </div>
  );
}
