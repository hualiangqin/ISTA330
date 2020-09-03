/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let str = n.toString().split("");
    let newstr = sort(str);
    return -Number(newstr[0] - newstr[newstr.length-1]);
};

var sort = function(input) {
    let output = [];
    let min = input[0];
    let index = 0;
    let len = input.length;
    while (output.length < len) {
           for (i=0; i<input.length; i++){
                  if (input[i] < min ){
                         min = input[i];
                         index = i;
                  }
           }
           output.push(min);
           input.splice(index, 1);
           min = input[0];
    }
    return output;
};