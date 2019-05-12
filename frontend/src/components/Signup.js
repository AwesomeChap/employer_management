import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/session";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const Signup = ({ errors, signup }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    };

    signup(user);
  };

  return (
    <>
      <div className="login-page">
        <div style={{ height: "500px", width: "400px" }} className="login-section">
          <h1>Signup</h1>
          {errors && <p className="err">{errors}</p>}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label for="username">Username</label>
              <input id="username" type="text" name="username" />
            </div>
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
          <div><Link className="link-btn" to="/login">Existing User?</Link></div>
        </div>
        <div className="goHome">
          <div><Link className="link-btn" to="/"> Go Home</Link></div>
        </div>
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);