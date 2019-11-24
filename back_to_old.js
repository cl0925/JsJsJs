/*
Back To Old(MEETA)
[Script]
http-request https?:\/\/.*\.itunes\.apple\.com\/WebObjects\/MZBuy.woa\/wa\/buyProduct requires-body=1,max-size=0,debug=1,script-path=back_to_old.js
Hostnames = *.itunes.apple.com
功能：辅助iTunes下载旧版app
ps : 电脑需信任Surge 证书
后续：可能会写对应的捷径方便直接浏览选择APP旧版本，并覆盖"oldid"生成本地脚本
更大可能是会忘记，这只是我一个临时需求（٩(ˊᗜˋ*)و
TG频道：@meetashare
*/



var obj = $request.body;

// 请将oldid的值替换为你想下载的旧版app的版本id
var oldid= "822114254";

var pat=/\d{6,}/;

var body=obj.replace(pat,oldid);

//console.log(body);

$done({body});