/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
	let output = [];
	
	addPowerSet(input, input.length, output);

	return output;
};

var addPowerSet = function(target, size, result){
	let poWSize = Math.pow(2, size);
	for (i=0; i<poWSize; i++){
		let subSet = [];
		for (j=0; j<size; j++){
			if ((i & (1 << j)) > 0){
				subSet.push(target[j]);
			}
		}
		result.push(subSet);
	}
}