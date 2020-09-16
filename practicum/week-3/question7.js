/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
	let rows = M.length;
	let cols = M[0].length;
	for (i=0; i<rows; i++){
		for (j=0; j<cols; j++){
			let hasUp = false;
			let hasLeft = false;
			
			if(i-1 >= 0 && i-1 < rows){
				hasLeft = true;
			}
			if(j-1 >= 0 && j-1 < cols){
				hasUp = true;
			}

			if (hasUp && !hasLeft){
				M[i][j] += M[i][j-1];
			}else if (hasLeft && !hasUp){
				M[i][j] += M[i-1][j];
			}else if (hasUp && hasLeft){
				M[i][j] += Math.min(M[i-1][j], M[i][j-1]);
			}
		}
	}
	return M[rows-1][cols-1];
};