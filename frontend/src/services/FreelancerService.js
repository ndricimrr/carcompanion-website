"use strict";

import HttpService from "./HttpService";

export default class FreelancerService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/freelancers";
  }

  static getFreelancers() {
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

  static getFreelancer(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${FreelancerService.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving freelancer");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static deleteFreelancer(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${FreelancerService.baseURL()}/${id}`,
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

  static updateFreelancer(freelancer) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${this.baseURL()}/${freelancer._id}`,
        freelancer,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static createFreelancer(freelancer) {
    freelancer.id = Math.floor(Math.random() * 100000000 + 1).toString();

    return new Promise((resolve, reject) => {
      HttpService.post(
        FreelancerService.baseURL(),
        freelancer,
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
