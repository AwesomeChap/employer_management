import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import { Link } from 'react-router-dom';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let empHistory = [];
    return (
      <>
        <h1>Hi {this.props.session.username}!</h1>
        <h2>Your Employment-history</h2>
        <table id="customers">
          <tr>
            <th>Company</th>
            <th>Date Joined</th>
            <th>Date Left</th>
          </tr>
          {empHistory.length ? empHistory : (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </table>

        <div className="goHome">
          <button style={{marginRight : '20px'}} className="link-btn blue" onClick={this.props.logout}>Logout</button>
          <div><Link className="link-btn blue" to="/"> Go Home</Link></div>
        </div>

      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
