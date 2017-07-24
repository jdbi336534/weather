'use strict';

module.exports = {

  'POST /api/brief': function (req, res) {
    res.json({
      "code": 0,
      "data": {
        "city": {
          "cityId": 2251,
          "counname": "中国",
          "name": "南郑县",
          "pname": "陕西省",
          "timezone": "8"
        },
        "condition": {
          "condition": "晴",
          "humidity": "45",
          "icon": "0",
          "temp": "34",
          "updatetime": "2017-07-24 17:00:00",
          "windDir": "西风",
          "windLevel": "2"
        }
      },
      "msg": "success",
      "rc": {
        "c": 0,
        "p": "success"
      }
    });
  },
    'POST /api/threeday': function (req, res) {
    res.json({
      "code": 0,
      "data": {
        "city": {
          "cityId": 2251,
          "counname": "中国",
          "name": "南郑县",
          "pname": "陕西省",
          "timezone": "8"
        },
        "condition": {
          "condition": "晴",
          "humidity": "45",
          "icon": "0",
          "temp": "34",
          "updatetime": "2017-07-24 17:00:00",
          "windDir": "西风",
          "windLevel": "2"
        }
      },
      "msg": "success",
      "rc": {
        "c": 0,
        "p": "success"
      }
    });
  },

};
