import React from "react";

function LoginLayout({ children }) {
  return (
    <div>
      <h1 style={{ color: "red" }}>This Is Login Layout</h1>
      {children}
    </div>
  );
}

export default LoginLayout;
