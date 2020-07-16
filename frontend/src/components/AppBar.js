import React from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
import logo from "../assets/logo.png";

class Example extends React.Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"

        logo={logo}
        menu={[
          { name: "FIND A CAR", to: "/#/findcar", exact:true},
          { name: "FREELANCERS", to: "/freelancers" },
          { name: "COMMUNITY", to: "/community" },
          { name: "SELL & ADVERTISE", to: "/sell-advertise" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}

export default Example;