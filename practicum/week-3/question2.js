
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

var findDuplicates = function(input) {
	let output = [];
	for (i=0; i<input.length; i++){
		let times = 0;
		for (j=0; j<input.length; j++){
			if (input[i] == input[j]){
				times++;
			}
		}
		if (times == 2 && !output.includes(input[i])){
			output.push(input[i]);
		}
	}
	return output;
};
