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
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      original:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
