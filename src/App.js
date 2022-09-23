import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/About/Footer";
import AuthService from "./services/auth.service";
import Team from "./components/About/Team";
import Blog from "./components/About/Blog";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/About/Home";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import Addcomponent from "./components/Add.component";
import BoardAdmin from "./components/board-admin.component";
import companyLogo from "./images/logo.gif";
import Certificate from "./components/About/Certificate"
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar navbar-light">
          <img src={companyLogo} alt="logo" height={100} />
          <Link to={"/"} className="navbar-brand ">
          <h3>E-Waste Collection</h3>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <button type="button" className="btn btn-success p-0 fs-5 fw-bold">
              <Link to={"/home"} className="nav-link ">
                HOME
              </Link>
              </button>
            </li>
            
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/profile"} className="nav-link text-uppercase">
                  {currentUser.username}
                </Link></button>
              </li>
              {showAdminBoard && (
              <li className="nav-item">
                <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/admin"} className="nav-link">
                  ADMIN BOARD
                </Link></button>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/user"} className="nav-link">
                  DASHBOARD
                </Link></button>
              </li>
            )}
              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <a href="/certificate" className="nav-link">
              CERTIFICATE
                </a></button>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LOGOUT
                </a></button>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/login"} className="nav-link">
                  LOGIN
                </Link></button>
              </li>

              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/register"} className="nav-link">
                  SIGN UP
                </Link></button>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-success ml-1 p-0 fs-5">
                <Link to={"/team"} className="nav-link">
                  MEET TEAM
                </Link></button>
              </li>
            </div>
          )}
        </nav>
       
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={Addcomponent} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/team" component={Team} />
            <Route path="/certificate" component={Certificate} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
       <Footer/></>
    );
  }
}

export default App;
