/*
https://api.bilibili.com/x/v2/reply/main\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surgeBilibiliReply.js
@supported 96440338D30B
*/
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
