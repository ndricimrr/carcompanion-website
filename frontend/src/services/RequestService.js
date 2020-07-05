"use strict";

import HttpService from "./HttpService";

export default class RequestService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/requests";
  }

  static getRequests() {
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

  static getRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${RequestService.baseURL()}/${id}`,
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

  static deleteRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${RequestService.baseURL()}/${id}`,
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

  static updateRequest(request) {
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

  static createRequest(request) {
    request.id = Math.floor(Math.random() * 100000000 + 1).toString();
    
    return new Promise((resolve, reject) => {
      HttpService.post(
        RequestService.baseURL(),
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
