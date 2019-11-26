/*
@supported 96440338D30B
*/
var obj = JSON.parse($response.body);
delete obj.advertising
$done({body: JSON.stringify(obj)});