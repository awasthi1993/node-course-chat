//jan 1st 1970 00:00:10 am
var moment=require('moment');
//var date=new Date();
//console.log(date.getMonth());

var date=moment();
console.log(date.format('h:mm a'));