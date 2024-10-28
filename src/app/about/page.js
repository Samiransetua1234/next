'use client'

import { useRouter } from "next/navigation"

const About = () =>{
    const router = useRouter()
    return(
        <div>
            <h1>This Is About Page</h1>
            <button onClick={() => router.push("/")}>Go To Home</button>
        </div>
    )
}

export default About