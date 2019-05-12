import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Alpha from "./Alpha";
import Beta from "./Beta";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return( 
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/alpha" component={Alpha} />
        <Route exact path="/beta" component={Beta} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </>
    )
  }
}

export default App;