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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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

  render() {
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
    const navBarStyling = isHomePageNotSelected
      ? `${styles.parentStyle} ${styles.parentWhitened}`
      : styles.parentStyle;

    return (
      <div className={navBarStyling}>
        <NavLink exact to={"/"} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img width={100} src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className={styles.navigationLinks}>
          <nav className={styles.line}>
            <NavLink
              exact
              to={"/findcar"}
              className={homePageLinkStyle}
              activeClassName={homePageLinkSelectedStyle}
            >
              {"Find a Car"}
            </NavLink>
            <NavLink
              exact
              to={"/freelancers"}
              className={homePageLinkStyle}
              activeClassName={homePageLinkSelectedStyle}
            >
              {"Freelancers"}
            </NavLink>
            <NavLink
              exact
              to={"/community"}
              className={homePageLinkStyle}
              activeClassName={homePageLinkSelectedStyle}
            >
              {"Community"}
            </NavLink>
            <NavLink
              exact
              to={"/sell-advertise"}
              className={homePageLinkStyle}
              activeClassName={homePageLinkSelectedStyle}
            >
              {"Sell & Advertise"}
            </NavLink>
          </nav>
        </div>
        {this.state.isLoggedIn ? (
          <div>
            <IconButton
              onClick={() => {
                alert("Hello User");
              }}
              aria-label="delete"
              color="primary"
              style={{ height: "100%" }}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                UserService.logout();
                console.log("-----", this.props.history.location.pathname);
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
    );
  }
}

export default withRouter(Header);
