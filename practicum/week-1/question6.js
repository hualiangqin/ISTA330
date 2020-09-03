/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    let sortedinput = sort(input);
    if (sortedinput.length%2 === 0){
        return (sortedinput[sortedinput.length/2 - 1] + sortedinput[sortedinput.length/2])/2
    }else{
        return sortedinput[ (sortedinput.length-1) / 2]
    }
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

let input = [1, 2, 2, 3, 4, 7, 9];
let output = median(input);
console.log(output);