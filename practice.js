'use strict'
const  x=10;
console.log(a)
var a=10;
console.log("X"+x)//X10
console.log(3+3+"5"+4+5)//6545
console.log("5"-5)//0
console.log("a"-5)//NaN
console.log(Number('a'))//Nan
console.log(5-"5"-"7"-"6")//-13
console.log(typeof(122345566666666666666666666666666666666666666666n))
console.log(typeof(Symbol("123")))//symbol
console.log("5"-"4")//1
console.log(typeof(NaN))//number
console.log(isNaN("true"))//true
console.log(isNaN(true))//false

console.log("a"-"a");//Nan

(function(){console.log("hello")})