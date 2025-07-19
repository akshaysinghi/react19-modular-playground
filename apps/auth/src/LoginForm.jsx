import React from "react";

export default function LoginForm() {
  console.log("✅ LoginForm loaded from remote");
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
