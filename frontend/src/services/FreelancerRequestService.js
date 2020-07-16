"use strict";

import HttpService from "./HttpService";
import UserService from "./UserService";

export default class FreelancerRequestService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/freelancerRequest";
  }

  static getFreelancerRequests() {
    return new Promise((resolve, reject) => {
      HttpService.get(
        this.baseURL(),
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

//   Getting a request with a specific ID
  static getFreelancerRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${FreelancerRequestService.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving freelancer request");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static deleteFreelancerRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${FreelancerRequestService.baseURL()}/${id}`,
        function (data) {
          if (data.message != undefined) {
            resolve(data.message);
          } else {
            reject("Error while deleting");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static updateFreelancerRequest(request) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${this.baseURL()}/${request._id}`,
        request,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static createFreelancerRequest(request) {
    request.id = UserService.getCurrentUser().id;

    return new Promise((resolve, reject) => {
      HttpService.post(
        FreelancerRequestService.baseURL(),
        request,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }
}