/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let map = new Map();
    let max = input[0];
    for (i=0; i<input.length; i++){
        if (map.has(input[i])){
            let count = map.get(input[i]);
            count++;
            map.set(input[i], count);
            if (count > map.get(max)){
                max = input[i];
            }
        }else{
            map.set(input[i], 1);
        }
    }
    if (map.get(max) > input.length/2){
        return max;
    }else{
        return -1;
    }
};