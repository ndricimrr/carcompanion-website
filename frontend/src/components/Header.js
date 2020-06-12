"use strict";

import React from "react";
import { Toolbar, Button } from "react-md";
import { withRouter } from "react-router-dom";
import styles from "./Header.css";
import KebabMenu from "./KebabMenu";
// import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(__dirname);
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
            <img
              width={200}
              src="https://i.ibb.co/8dSwPJL/logo.png"
              alt="logo"
            />
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
              to={"/inspectors"}
              className={homePageLinkStyle}
              activeClassName={homePageLinkSelectedStyle}
            >
              {"Inspectors"}
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
      </div>
      // <Toolbar
      //     colored
      //     nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
      //     title={this.props.title}
      //     actions={<KebabMenu id="toolbar-colored-kebab-menu" />}>
      // </Toolbar>
    );
  }
}

export default withRouter(Header);
