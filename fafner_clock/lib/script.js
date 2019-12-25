var nowTime = new Date();
var nowYear = nowTime.getFullYear();
var nowMonth =  nowTime.getMonth() + 1;
var nowDay = nowTime.getDate();
var nowHour = nowTime.getHours();
var nowMin  = nowTime.getMinutes();
var nowSec  = nowTime.getSeconds();

if (nowMonth < 10) nowMonth = "0" + nowMonth;
if (nowDay < 10) nowDay = "0" + nowDay;
if (nowHour < 10) nowHour = "0" + nowHour;
if (nowMin < 10) nowMin = "0" + nowMin;

var msg = nowHour + ":" + nowMin ;

document.getElementById("RealtimeYear").innerHTML = nowYear;
document.getElementById("RealtimeMonth").innerHTML = nowMonth;
document.getElementById("RealtimeDay").innerHTML = nowDay;
document.getElementById("RealtimeHour").innerHTML = msg;
