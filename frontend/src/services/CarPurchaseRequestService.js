"use strict";

import HttpService from "./HttpService";
import UserService from "./UserService";

export default class CarPurchaseRequestService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/carPurchaseRequest";
  }

//not sure how to make this compatible with user id
  static getCarPurchaseRequests(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        this.baseURL(),
        id,
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
  static getCarPurchaseRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${CarPurchaseRequestService.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving car purchase request");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static deleteCarPurchaseRequest(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${CarPurchaseRequestService.baseURL()}/${id}`,
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

  static updateCarPurchaseRequest(request) {
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

//not sure how to set sender and receiver id
  static createCarPurchaseRequest(request) {
    request.senderID = UserService.getCurrentUser().id;

    return new Promise((resolve, reject) => {
      HttpService.post(
        CarPurchaseRequestService.baseURL(),
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
