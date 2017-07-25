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
          "cityId": 284609,
          "counname": "中国",
          "name": "东城区",
          "pname": "北京市",
          "timezone": "8"
        },
        "forecast": [{
          "conditionDay": "多云",
          "conditionIdDay": "1",
          "conditionIdNight": "33",
          "conditionNight": "阵雨",
          "predictDate": "2017-07-24",
          "tempDay": "29",
          "tempNight": "22",
          "updatetime": "2017-07-24 18:10:13",
          "windDirDay": "西风",
          "windDirNight": "北风",
          "windLevelDay": "2",
          "windLevelNight": "2"
        }, {
          "conditionDay": "多云",
          "conditionIdDay": "1",
          "conditionIdNight": "31",
          "conditionNight": "多云",
          "predictDate": "2017-07-25",
          "tempDay": "27",
          "tempNight": "22",
          "updatetime": "2017-07-24 18:10:13",
          "windDirDay": "东南风",
          "windDirNight": "北风",
          "windLevelDay": "2",
          "windLevelNight": "1"
        }, {
          "conditionDay": "阵雨",
          "conditionIdDay": "3",
          "conditionIdNight": "33",
          "conditionNight": "阵雨",
          "predictDate": "2017-07-26",
          "tempDay": "23",
          "tempNight": "20",
          "updatetime": "2017-07-24 18:10:13",
          "windDirDay": "东南风",
          "windDirNight": "北风",
          "windLevelDay": "2",
          "windLevelNight": "1"
        }]
      },
      "msg": "success",
      "rc": {
        "c": 0,
        "p": "success"
      }
    });
  },

};
