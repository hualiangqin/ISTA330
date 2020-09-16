/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    let output = [];
    let product = 1;
    for(i=0; i<input.length; i++){
        product *= input[i];
    }
    for(i=0; i<input.length; i++){
        output[i] = product/input[i];
    }
    return output;
};

