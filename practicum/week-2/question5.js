/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    if (input.length>1){
        // decrease
        if (input[0] >= input[1]){
            for (i=0; i<input.length-1; i++){
                if (input[i] < input[i+1]){
                    return false;
                }
            }
        }
        // increase
        else if (input[0] <= input[1]){
            for (i=0; i<input.length-1; i++){
                if (input[i] > input[i+1]){
                    return false;
                }
            }
        }
    }
    return true;
};

console.log('hi');