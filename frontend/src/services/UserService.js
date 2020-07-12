"use strict";

import HttpService from "./HttpService";

export default class UserService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/auth";
  }

  static register(email, user, pass) {
    return new Promise((resolve, reject) => {
      HttpService.post(
        `${UserService.baseURL()}/register`,
        {
          email: email,
          username: user,
          password: pass,
          date: Date(),
        },
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static login(user, pass) {
    return new Promise((resolve, reject) => {
      HttpService.post(
        `${UserService.baseURL()}/login`,
        {
          username: user,
          password: pass,
        },
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  // this function updates freelancer data
  static updateFreelancerData(freelancer) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${UserService.baseURL()}/update-freelancer`,
        {
          id: this.getCurrentUser().id,
          freelancerData: freelancer,
        },
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  // this function updates freelancer data
  static updateCarOwnerData(carowner) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${UserService.baseURL()}/update-carowner`,
        {
          id: this.getCurrentUser().id,
          carOwnerData: carowner,
        },
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static logout() {
    window.localStorage.removeItem("jwtToken");
  }

  static getCurrentUser() {
    console.log("asdasd");
    let token = window.localStorage["jwtToken"];
    if (!token) return {};
    console.log("asdasd");
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace("-", "+").replace("_", "/");
    return {
      id: JSON.parse(window.atob(base64)).id,
      username: JSON.parse(window.atob(base64)).username,
    };
  }

  static isAuthenticated() {
    return !!window.localStorage["jwtToken"];
  }
}
