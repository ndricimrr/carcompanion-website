"use strict";

import HttpService from "./HttpService";
import UserService from "./UserService";

export default class RequestService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/request";
  }

  // get list of all my requests sent + received
  static getMyRequests() {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${this.baseURL()}/list/${UserService.getCurrentUser().id}`,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  // get a certain request by using it's id
  static getRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${this.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving request");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  // delete a request by the request id
  static deleteRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${this.baseURL()}/${id}`,
        function (data) {
          if (data.message != undefined) {
            resolve(data.message);
          } else {
            reject("Error while deleting request");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static updateRequest(request, id) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${this.baseURL()}/${id}`,
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

  // create a request
  static createRequest(request) {
    return new Promise((resolve, reject) => {
      HttpService.post(
        this.baseURL(),
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
