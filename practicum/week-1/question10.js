/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let str = n.toString().split("");
    str.sort(function(a, b){return a-b})
    return -Number(str[0] - str[str.length-1]);
};