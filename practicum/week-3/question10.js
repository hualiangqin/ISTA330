/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    let string = "";
    for (i=0; i<s.length; i++){
        let char = s.charAt(i);
        if (char.match(/^[a-z0-9]+$/i)){
            string+=char.toLowerCase();
        }
    }
    for (i=0; i<Math.floor(string.length/2)-1; i++){
        if (string.charAt(i) != string.charAt(string.length-1-i)){
            return false;
        }
    }
    return true;
};