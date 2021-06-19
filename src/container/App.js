import React from "react";
import LanguageSelectorForDefault from "../components/LanguageSelectorForDefault";
import TopBar from "../components/TopBar";
import UserSignupPage from "../pages/UserSignupPage";
import UserSignInPage from "../pages/UserSignInPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import {connect} from "react-redux";
//import {Authentication} from "../shared/AuthenticationContext";
class App extends React.Component{
  //static contextType=Authentication;

  render(){
    const {isLoggedIn}=this.props;
    return (
    <div>
      <Router>
        <TopBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />

          {!isLoggedIn &&(
          <Route 
          path="/login" 
          component={UserSignInPage} 
          />
          )}
          
          {!isLoggedIn &&(
          <Route 
          path="/register" 
          component={UserSignupPage} 
          />
          )}

          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/"></Redirect>
        </Switch>

      </Router>
      <LanguageSelectorForDefault></LanguageSelectorForDefault>
    </div>
  );}
  
}

const mapStateToProps=(store)=>{
  return{
      isLoggedIn:store.isLoggedIn
      }
}


export default connect(mapStateToProps)(App);