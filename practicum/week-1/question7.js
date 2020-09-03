/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       let output = sort(input);
       let sum = 0;
       for (i=0; i<output.length; i+=2){
              sum += output[i];
       }
       return sum;
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