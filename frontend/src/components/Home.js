import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : Boolean(this.props.session.userId),
    }
    console.log(this.props.session);
  }

  handleJoin = (name) => {
    if(!this.state.loggedIn){
      alert('Please login to join');
    }
    else{
      alert(`you joined ${name}`);
      // session.
    }
  }
  render() {

    let companies = [ 
      { 
        name : 'Alpha',
        owner : 'Anonymous',
        link : '/alpha',
        status : 'join'
      },
      { 
        name : 'Beta',
        owner : 'Anonymous',
        link : '/beta',
        status : 'join'
      }
    ];

    companies = companies.map( c => {
      return(
        <div className="company">
            <div className="sub-container">
              <h2>{c.name}</h2>
              <div onClick={()=>{this.handleJoin(c.name)}} className="link-btn"> {c.status} </div>
            </div>
            <div className="sub-container">
              <div className="owner"><span>owned by</span> {c.owner}</div>
              <Link to={c.link} className="link-btn">View More</Link>
            </div>
          </div>
      )
    })

    return (
      <>
        <div className="nav">
          <h2>Employee <span>Data Manager</span></h2>
          <div className="nav-btns">
            {this.state.loggedIn ? (
              <>
                <div className="link-btn">Hi, {this.props.session.username}</div>
                <Link className="link-btn" to="/dashboard">Dashboard</Link>
              </>
            ) : (
                <>
                  <Link className="link-btn" to="/login">Log in</Link>
                  <Link className="link-btn" to="/signup">Sign up</Link>
                </>
              )}
          </div>
        </div>
        <div className="companies">
          {companies}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ session}) => ({
  session : session
});

export default connect(mapStateToProps)(Home);