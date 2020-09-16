/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
    let map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C",100], ["D",500], ["M",1000]]);
    let ints = [];
    for (i=0; i<s.length; i++){
        let char = s.charAt(i);
        ints.push(map.get(char));
    }
    // reorganize the integer list
    for (i=0; i<ints.length-1; i++){
        if (ints[i] < ints[i+1]){
            if ((ints[i] == 1 && (ints[i+1] == 5 || ints[i+1] == 10)) ||
                (ints[i] == 10 && (ints[i+1] == 50 || ints[i+1] == 100)) ||
                (ints[i] == 100 && (ints[i+1] == 500 || ints[i+1] == 1000))
            ){
                ints[i] = ints[i+1] - ints[i];
                ints[i+1] = 0;
            }
        }
    }
    let result = 0;
    for (i=0; i<ints.length; i++){
        result+=ints[i];
    }
    return result;
};