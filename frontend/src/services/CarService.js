"use strict";

import HttpService from "./HttpService";

export default class CarService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/cars";
  }

  static getCars() {
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

  static getCar(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${CarService.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving movie");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static deleteCar(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${CarService.baseURL()}/${id}`,
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

  static updateCar(car) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${this.baseURL()}/${car._id}`,
        car,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static createCar(car) {
    car.id = Math.floor(Math.random() * 100000000 + 1).toString();

    car.images = {
      thumbnail:
        "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
      original:
        "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
    };
    return new Promise((resolve, reject) => {
      HttpService.post(
        CarService.baseURL(),
        car,
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
