import React from "react"



export default function Lecture({params}){

    const {lecture} = React.use(params)

    return(
        <div>
            <h1> Day {lecture[0]}</h1>
            <h1> Lecture {lecture[1]}</h1>
        </div>
    )
}