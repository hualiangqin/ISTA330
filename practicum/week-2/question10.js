/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    let sortedInput = sort(input);
    let minDiff = sortedInput[1]-sortedInput[0];
    for (i=0; i<sortedInput.length-1; i++){
        let diff = sortedInput[i+1]-sortedInput[i];
        if (diff < minDiff){
            minDiff = diff;
        }
    }
    let output = [];
    for (i=0; i<sortedInput.length-1; i++){
        let pairs = []
        let diff = sortedInput[i+1]-sortedInput[i];
        if (diff == minDiff){
            pairs[0] = sortedInput[i];
            pairs[1] = sortedInput[i+1];
            output.push(pairs);
        }
    }
    return output;
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
           index = 0;
    }
    return output;
};