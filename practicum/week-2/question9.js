/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let map = new Map();
    let largestSize = 1;
    for (i=1; i<=n; i++){
        
        let sumOfDigits = 0;
        if (i<10){
            sumOfDigits = i;
        }else{
            let numStr = i.toString();
            for (j=0; j<numStr.length; j++){
                sumOfDigits += parseInt(numStr.charAt(j));
            }
        }

        if (map.has(sumOfDigits)){
            let value = map.get(sumOfDigits) + 1;
            map.set(sumOfDigits, value);
            if (value > largestSize){
                largestSize = value;
            }
        }else{
            map.set(sumOfDigits, 1);
        }
    }

    let sum = 0;
    for (let key of map.keys()){
        if (map.get(key) == largestSize){
            sum++;
        }
    }
    return sum;
};