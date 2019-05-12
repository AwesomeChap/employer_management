import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Alpha extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="company-dashboard">
        <h1>Alpha</h1>

        <div className="company-sub-section">
          <h2 className="Company-heading" >Our Present Employees</h2>
          <div className="flex-box">
            <div className="employee-card">
              <img className="e-img" src="https://img.icons8.com/color/420/person-male.png" alt="" />
              <p>Anonymous</p>
            </div>
            <div className="employee-card">
              <img className="e-img" src="https://img.icons8.com/color/420/person-male.png" alt="" />
              <p>Anonymous</p>
            </div>
          </div>
        </div>

        <div className="company-sub-section">
          <h2 className="Company-heading" >Our Past Employees</h2>
          <div className="flex-box">
            <div className="employee-card">
              <img className="e-img" src="https://img.icons8.com/color/420/person-male.png" alt="" />
              <p>Anonymous</p>
            </div>
            <div className="employee-card">
              <img className="e-img" src="https://img.icons8.com/color/420/person-male.png" alt="" />
              <p>Anonymous</p>
            </div>
          </div>

        </div>
        <div className="goHome">
          <div><Link className="link-btn" to="/"> Go Home</Link></div>
        </div>
      </div>
    )
  }
}

export default Alpha