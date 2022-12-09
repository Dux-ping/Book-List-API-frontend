import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, changeDisabled] = useState(false);

  const handleSubmit = async (n) => {
    n.preventDefault();
    changeDisabled(true);
    try {
      const res = await props.client.login(email, password);
      console.log(res);
      props.loggedIn(res.data.token);
    } catch (error) {
      alert("incorrect email or password,please try again");
    }
    changeDisabled(false);
  };

  return (
    <div className="authentification-form-container">
      <h2>Sign in</h2>
      <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="email"></label>
        <input
          value={email}
          onChange={(n) => setEmail(n.target.value)}
          type="email"
          disabled={disabled}
          placeholder="Email"
          id="email"
          name="email"
        />
        <label htmlFor="password"></label>
        <input
          value={password}
          onChange={(n) => setPassword(n.target.value)}
          type="password"
          disabled={disabled}
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Please Register here.
      </button>
    </div>
  );
}

export default Login;
