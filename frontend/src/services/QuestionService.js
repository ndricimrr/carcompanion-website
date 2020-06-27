"use strict";

import HttpService from "./HttpService";

export default class QuestionService {
  constructor() {}

  static baseURL() {
    return "http://localhost:3000/questions";
  }

  static getQuestions() {
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

  static getQuestion(id) {
    return new Promise((resolve, reject) => {
      HttpService.get(
        `${QuestionService.baseURL()}/${id}`,
        function (data) {
          if (data != undefined || Object.keys(data).length !== 0) {
            resolve(data);
          } else {
            reject("Error while retrieving question");
          }
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static deleteQuestion(id) {
    return new Promise((resolve, reject) => {
      HttpService.remove(
        `${QuestionService.baseURL()}/${id}`,
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

  static updateQuestion(question) {
    return new Promise((resolve, reject) => {
      HttpService.put(
        `${this.baseURL()}/${question._id}`,
        question,
        function (data) {
          resolve(data);
        },
        function (textStatus) {
          reject(textStatus);
        }
      );
    });
  }

  static createQuestion(question) {
    question.id = Math.floor(Math.random() * 100000000 + 1).toString();
//Handle question images from the file upload
    question.images = {
      thumbnail:
        "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
      original:
        "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
    };
    return new Promise((resolve, reject) => {
      HttpService.post(
        QuestionService.baseURL(),
        question,
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
