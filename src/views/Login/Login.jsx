import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../api/authentication";
import Auth from "../../api/localStorage";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    none_filed_error: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    login(state)
      .then((data) => {
        console.log(data)
        Auth.login(data.accessToken , data.refreshToken)
        alert("success")
        })
      .catch((res) => {
        console.log(res.response);
        setError(res.data);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((old) => ({ ...old, [name]: value }));
  };
  if(Auth.checkLogin()){
      return (
          <Navigate to="/" replace={true} />
      )
  }
  return (
    <div>
      <div>
        {error.none_filed_error.map((erroe) => (
          <p key={error}>{error}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={state.username}
          />
        </div>
        <div>
          <label htmlFor="password"> password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
