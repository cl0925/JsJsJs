/*
每天早上8:00 自动执行签到, 可自行修改.
Surge 4.0 : [Script]

cron "0 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/52pojie.js

http-request https:\/\/www\.52pojie\.cn\/home\.php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/Get-Cookie.js

MITM = www.52pojie.cn

首次使用时,  需要手动登录吾爱论坛获取Cookie,  如Surge弹出获取成功通知时，即可禁用HTTP request脚本。
由于Cookie的有效性，如果脚本将来弹出Cookie无效的通知，则需要重复上述步骤。


签到接口参考自: King



// MITM = www.52pojie.cn
*/

var bonus = {
  url: 'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2&mobile=no',
  headers: {
    Cookie: $persistentStore.read("CookieWA"),
  }
};
var date = new Date()
var week = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
var month = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];

$httpClient.get(bonus, function(error, response, data) {
  if (error) {
    console.log(error);
    $notification.post("52pojie Daily bonus. Interface error‼️‼️‼️", "", error)
    $done()
  } else {
    if (data.match(/ÒÑÍê³É/)) {
      $notification.post("52pojie Daily bonus", "", week[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + "Daily bonus success！🎉")
      $done()
    } else {
      if (data.match(/ÄúÒÑ/)) {
        $notification.post("52pojie Daily bonus", "", week[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + "Repeat ⚠️")
        $done()
      } else {
        if (data.match(/ÏÈµÇÂ¼/)) {
          $notification.post("52pojie Daily bonus. Error. Cookies expire", "", "Please reopen the script to get‼️")
          $done()
        } else {
          $notification.post("52pojie Daily bonus", "", "Scripts need to be updated ‼️‼️")
          $done()
        }
      }
    }
  }
})

// If reprinted, please indicate the source. My TG channel @NobyDa