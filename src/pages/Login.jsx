import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">Email :</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
        />

        <label for="password">Password :</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
        />

        <button>Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        Already have an account? Register here.
      </button>
    </div>
  );
};
