/*
Surge
纸塘&森图壁纸下载去广告 = type=http-response,pattern=https://api.bspapp.com/client,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ztbz.js,script-update-interval=0
hostname = api.bspapp.com
*/
var body = $response.body.replace(/\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0076\u0069\u0070\u0045\u0066\u0066\u0065\u0063\u0074\u0069\u0076\u0065\u0054\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070\u0022\u003A\u0030/g, '\u0076\u0069\u0070\u0045\u0066\u0066\u0065\u0063\u0074\u0069\u0076\u0065\u0054\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070\u0022\u003A\u0034\u0030\u0039\u0034\u0031\u0031\u0036\u0034\u0033\u0031')
$done({ body });
