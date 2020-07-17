import React from "react";
import { Toolbar } from "react-md";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import styles from "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import UserService from "../services/UserService";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockIcon from "@material-ui/icons/Lock";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DrawerToggle from "./DrawerToggle";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      displayDrawer: true,
    };
    console.log(__dirname);
  }

  componentDidMount() {
    if (UserService.isAuthenticated()) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  handleToggle = () => {
    this.setState({
      displayDrawer: !this.state.displayDrawer,
    });
    console.log(this.state.displayDrawer);
  };

  render() {
    console.log("reder", this.state.displayDrawer);
    const isHomePageNotSelected = this.props.location.pathname !== "/";
    const homePageLinkSelectedStyle = isHomePageNotSelected
      ? styles.linkSelected
      : `${styles.linkSelected} ${styles.linkSelectedHome}`;
    const homePageLinkStyle = styles.linkStyling;
    //  isHomePageNotSelected
    //   ? styles.linkStyling
    //   : `${styles.linkStyling} ${styles.linkSelectedHome}`;
    const titleStyle = styles.title;
    //   ? styles.title
    //   : `${styles.title} ${styles.titleHome}`;
    const navBarStyling = this.state.displayDrawer
      ? styles.drawer
      : styles.parentStyle;

    return (
      <div>
        <div className={styles.mobile}>
          <DrawerToggle clicked={this.handleToggle} />
        </div>
        <div className={navBarStyling}>
          <NavLink
            exact
            to={"/"}
            style={{ textDecoration: "none" }}
            className={styles.mobileLogo}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img width={100} src={logo} alt="logo" />
            </div>
          </NavLink>

          <NavLink
            exact
            to={"/findcar"}
            className={homePageLinkStyle}
            activeClassName={homePageLinkSelectedStyle}
          >
            <Tab label="Find A Car" />
          </NavLink>
          <NavLink
            exact
            to={"/freelancers"}
            className={homePageLinkStyle}
            activeClassName={homePageLinkSelectedStyle}
          >
            <Tab label="Freelancers" />
          </NavLink>
          <NavLink
            exact
            to={"/community"}
            className={homePageLinkStyle}
            activeClassName={homePageLinkSelectedStyle}
          >
            <Tab label="Community" />
          </NavLink>
          <NavLink
            exact
            to={"/sell-advertise"}
            className={homePageLinkStyle}
            activeClassName={homePageLinkSelectedStyle}
          >
            <Tab label="Sell & Advertise" />
          </NavLink>
          {this.state.isLoggedIn ? (
            <div>
              <NavLink exact to={"/profile"}>
                <IconButton
                  aria-label="delete"
                  color="primary"
                  style={{ height: "100%" }}
                >
                  <AccountCircleIcon />
                </IconButton>
              </NavLink>
              <IconButton
                onClick={() => {
                  this.props.history.push("/requests");
                }}
                aria-label="delete"
                color="primary"
                style={{ height: "100%" }}
              >
                <MailOutlineIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  UserService.logout();
                  this.props.history.go(this.props.history.location.pathname);
                }}
                aria-label="delete"
                color="primary"
                style={{ height: "100%" }}
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
          ) : (
            <IconButton
              onClick={() => {
                this.props.history.push("/login");
              }}
              aria-label="login"
              color="primary"
              style={{ height: "100%" }}
            >
              <LockIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
