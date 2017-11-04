var AipOcrClient = require('baidu-aip-sdk').ocr;

// 设置APPID/AK/SK
var APP_ID = '10313249';
var API_KEY = 'W6A1B8baoMY9ZRIWjlGma0eT';
var SECRET_KEY = '48m6juxm1AMF7GxK4YzblTc8OXjbPhv0';

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

let ocrNetImg = async url => {
  let ocrResult = await client.generalBasicUrl(url, { detect_direction: true });

  let wordsList = ocrResult.words_result;
  let result = [];
  for (var i = 0; i < wordsList.length; i++) {
    result += wordsList[i].words;
  }
  console.log(result);

};

var md = '![mark](http://oxnc5ug9u.bkt.clouddn.com/pic/171104/C8L2faIejL.png)';

var url = /\((.*)\)/.exec(md)[1];

ocrNetImg(url);
