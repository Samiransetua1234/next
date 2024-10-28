"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This Is About Page</h1>
      <button onClick={() => router.push("/")}>Go To Home</button>
      <br />
      <br />
      <Link href="/about/aboutcollege">To About College</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">To About Student</Link>
    </div>
  );
};

export default About;
