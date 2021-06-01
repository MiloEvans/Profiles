/*圈叉配置写法
rewrite_local
#微信阅读会员
^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary\? url script-response-body weread.js

MITM
hostname:i.weread.qq.com
-----------------将军℡--------------------
*/
var obj = JSON.parse($response.body);
obj= {
  "startTime": 1585386150,
  "expiredTime": 3043041983,
  "expired": 0,
  "isPaying": 0,
  "permanent": 0,
  "day": 9,
  "remainTime": 11111057862,
  "isAutoRenewable": 0,
  "historyAutoRenewable": 0,
  "autoRenewableChannel": 0,
  "autoRenewableTime": 0,
  "autoRenewablePrice": 1900,
  "savedMoney": 3000,
  "totalFreeReadDay": 0,
  "remainCoupon": 0,
  "remainCount": 0,
  "hintsForRecharge": {
    "predictedSavedMoney": 10315,
    "predictedChapterPrice": 15,
    "pricePerMonth": 900,
    "sendCoupons": 0
  },
  "freeBookIds": ["352681"]
  }
$done({body: JSON.stringify(obj)});
