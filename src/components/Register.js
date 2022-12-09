import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (n) => {
    n.preventDefault();
  };

  return (
    <div className="authentification-form-container">
      <h2>Create account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          value={email}
          onChange={(n) => setEmail(n.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label htmlFor="password"></label>
        <input
          value={password}
          onChange={(n) => setPassword(n.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Please Login here.
      </button>
    </div>
  );
}

export default Register;