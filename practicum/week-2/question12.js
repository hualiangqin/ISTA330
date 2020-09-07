/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    if (n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else if(n > 1){
        return f(0, 1, n);
    }
};

var f = function(n1, n2, n){
    if (n == 0){
        return n1;
    }else{
        return f(n2, n1+n2, n-1);
    }
}