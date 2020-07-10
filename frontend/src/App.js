"use strict";

import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { HomePage } from "./views/HomePage";
import { FreelancersPageView } from "./views/FreelancersPageView";
import { MovieDetailView } from "./views/MovieDetailView";
import { MovieFormView } from "./views/MovieFormView";
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { CommunityView } from "./views/CommunityView";
import { FindCarView } from "./views/FindCarView";
import UserService from "./services/UserService";
import PostCarView from "./views/PostCarView";
import AddFreelancerView from "./views/AddFreelancerView";
import AskQuestionForm from "./views/AskQuestionForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Car Companion App",
      routes: [
        { component: PostCarView, path: "/sell-advertise", exact: true },
        { component: AddFreelancerView, path: "/addfreelancer", exact: true },
        { component: FindCarView, path: "/findcar", exact: true },
        { component: AskQuestionForm, path: "/community", exact: true },
        { component: HomePage, path: "/", exact: true },
        { component: FreelancersPageView, path: "/freelancers", exact: true },
        { component: MovieDetailView, path: "/show/:id" },
        {
          render: (props) => {
            if (UserService.isAuthenticated()) {
              return <MovieFormView {...props} />;
            } else {
              return <Redirect to={"/login"} />;
            }
          },
          path: "/edit/:id",
        },
        {
          render: (props) => {
            if (UserService.isAuthenticated()) {
              return <MovieFormView {...props} />;
            } else {
              return <Redirect to={"/login"} />;
            }
          },
          path: "/add",
        },
        { component: UserLoginView, path: "/login" },
        { component: UserSignupView, path: "/register" },
      ],
    };
  }

  componentDidMount() {
    document.title = this.state.title;
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {this.state.routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}
