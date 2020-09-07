
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
	let sum = 0;
	let max = 0;
	for (i=0; i<input.length; i++){
		if (input[i] > 0){
			sum += input[i];
			max = sum;
			while (sum > 0 && i<input.length){
				i++;
				sum += input[i];
				if (sum > max){
					max = sum;
				}
			}
			sum = 0;
		}
	}
	return max;
 };
input = [-17,3,1,5,-9,-1,10];
console.log(largestSubarray(input));