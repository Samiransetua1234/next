'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
    const router = useRouter()
    const navigation = (route)=>{
        router.push(`/login/${route}`)
      }
  return (
    <div>
      <h1>This is login page</h1>
      <Link href="/">go to Home </Link>

      <br/>
      <br/>
      <button onClick={()=>navigation('studentlogin')}>StudentLogin</button>
      <br/>
      <br/>
      <button onClick={()=>navigation('teacherlogin')}>TeacherLogin</button>
    </div>
  );
}

export default page;
