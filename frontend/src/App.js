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
import { CommunityView } from "./views/CommunityView/CommunityView";
import { FindCarView } from "./views/FindCarView";
import UserService from "./services/UserService";
import PostCarView from "./views/PostCarView";
import AddFreelancerView from "./views/AddFreelancerView";
import RequestListView from "./views/RequestView/RequestListView";
import RequestContent from "./views/RequestView/RequestContent";
import QuestionView from "./views/QuestionView";
import ExtendProfileView from "./views/ExtendProfile/ExtendProfileView";

import { CarDescriptionView } from "./views/CarDescriptionView";

import QuestionListView from "./views/CommunityView/QuestionsListView";
import CarOwnerUserProfile from "./views/CarOwnerUserProfile";
import FreelancerUserProfile from "./views/FreelancerUserProfile"
import FreelancerDescriptionView from "./views/FreelancerDescriptionView";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Car Companion App",
      routes: [
        { component: PostCarView, path: "/sell-advertise", exact: true },
        { component: AddFreelancerView, path: "/addfreelancer", exact: true },
        { component: FindCarView, path: "/findcar", exact: true },
        { component: ExtendProfileView, path: "/extend-profile", exact: true },
        { component: CarDescriptionView, path: "/carDescription", exact: true },
        { component: QuestionView, path: "/community/:id", exact: true },
        { component: CommunityView, path: "/community", exact: true },
        { component: HomePage, path: "/", exact: true },
        { component: FreelancersPageView, path: "/freelancers", exact: true },
        { component: MovieDetailView, path: "/show/:id" },
        { component: QuestionListView, path: "/questionList", exact: true },
        // { component: FreelancerDescriptionView, path:"/freelancerDescription", exact: true },
        {
          component: FreelancerDescriptionView,
          path: "/freelancers/:id",
          exact: true,
        },
        { component: RequestListView, path: "/requests", exact: true },
        { component: RequestContent, path: "/requests/:id", exact: true },
        { component: CarOwnerUserProfile, path:"/CarOwnerUserProfile", exact: true},
        { component: FreelancerUserProfile, path:"/FreelancerrUserProfile", exact: true},
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
      <Router>
        <Switch>
          {this.state.routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}
