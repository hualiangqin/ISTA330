/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    let sortedA = sort(A);
    let move = 0;
    for (i=0; i<sortedA.length; i++){
        for (j=i+1; j<sortedA.length; j++){
            if (sortedA[i] == sortedA[j]){
                sortedA[j] += 1;
                move++;
            }
        }
    }
    return move;
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