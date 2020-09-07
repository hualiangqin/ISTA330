/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    let map = new Map();
    for (i=0; i<input.length; i++){
        if (map.has(input[i])){
            let count = map.get(input[i]);
            count++;
            map.set(input[i], count);
        }else{
            map.set(input[i], 1);
        }
    }
    for (let key of map.keys()){
        if (map.get(key) == key){
            return key;
        }
    }
    return -1;
};