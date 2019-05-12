import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/session";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const Login = ({ errors, login }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    login(user);
  }

  return (
    <div className="login-page">
      <div className="login-section">
        <h1>Login</h1>
        {errors && <p className="err" >{errors}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label for="email"> Email </label>
            <input id="email" type="email" name="email" />
          </div>
          <div className="field">
            <label for="password"> Password </label>
            <input type="password" name="password" />
          </div>
          <div className="field">
            <input className="link-btn" id="email" type="submit" value="Submit" />
          </div>
        </form>
        <div><Link className="link-btn" to="/signup">New User?</Link></div>
      </div>

      <div className="goHome">
        <div><Link className="link-btn" to="/"> Go Home</Link></div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);