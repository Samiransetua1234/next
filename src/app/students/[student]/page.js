"use client";

import React from "react";

export default function Student({ params }) {
    // console.log("params", params);
    const {student} = React.use(params)
    
  return <div>This is Student page for {student}</div>;
}
