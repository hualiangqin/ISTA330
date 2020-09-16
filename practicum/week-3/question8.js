/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/

var sortColors = function(input) {
    let red = 0;
    let white = 0;
    let blue = 0;
    for (i=0; i<input.length; i++){
        if (input[i] == 0){
            red++;
        }else if(input[i] == 1){
            white++;
        }else{
            blue++;
        }
    }
    let output = [];
    for (i=0; i<red; i++){
        output.push(0);
    }
    for (i=0; i<white; i++){
        output.push(1);
    }
    for (i=0; i<blue; i++){
        output.push(2);
    }
    return output;
};