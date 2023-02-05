import React, { useState } from "react";
import "./LoginPage.scss";
import { Route,Router } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = () => {
    console.log(`Username:${username} Password:${password}`);
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="form-slogan">
          <h2 className="col-12 text-login">Login to account</h2>
          <p className="col-12 login-slogan">
            Key to sucess is the discepline and the method. One makes you a man
            and the other turn you into a Beast.
          </p>
        </div>
        <form className="login-content" onSubmit={handleSubmit}>
          <div className="col-12 form-group login-input">
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="E-mail Address"
              className="form-control"
            />
          </div>
          <div className="col-12 form-group login-input">
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="btn-group">
            <button
              type="submit"
              className="btn btn-login btn-primary"
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
        <div className="social-login">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f social-icon facebook"></i>
            <span className="social-text">Facebook</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-google-plus-g social-icon google"></i>
            <span className="social-text">Google</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in social-icon linkendin"></i>
            <span className="social-text">Linkendin</span>
          </a>
        </div>
        <div className="sign-up-text">Sign up</div>
        <div className="password-forget">Forget Password</div>
      </div>
    </div>
  );
};

export default LoginPage;
