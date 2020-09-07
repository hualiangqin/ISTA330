/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
	let output = [];
	for (i=0; i<n; i++){
		let inner = [];
		inner[0] = 1;
		inner[i] = 1;
		if (i>1){
			let last = output[i-1];
			for(j=1; j<i; j++){
				inner[j] = last[j] + last[j-1];
			}
		}
		output.push(inner);
	}
	return output;
};