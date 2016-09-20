//Problem 1

//Show how you would determine the location of the number 27 in the array:
//var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
//Store its location in a variable.

//Store its location in a variable.
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

//Store its location in a variable.
console.log("Problem 1");
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var index = numArray.indexOf(27);
console.log(index);
var index2;
for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] == 27) index2 = i;
}
console.log(index2);

//Problem 2
//Using the same array from Problem 1, 
//calculate the sum of all numbers in the array and assign the sum to a variable.

console.log("Problem 2");
console.log(numArray.reduce((a,b) => a+b));
var sum = 0;
for(var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}
console.log(sum);
var total = 0;
for(i in numArray) {
    total += numArray[i];
}
console.log(total);

// Problem #3
//Initialize a new array and fill it with the numbers 1 through 10. 
//Then, remove the last element of the array. Output the array to the console.


console.log("Problem 3");
var ary = [1,2,3,4,5,6,7,8,9,10];
ary.pop();
console.log(ary);
var ary2 = [];
for(var i = 1; i <= 10; i++) {
    ary2[i-1] = i;
}
ary2.splice(9 /*Index to delete*/,1 /*Items to delete*/);
console.log(ary2);

// Problem #4
//Create a function with two parameters. This function will be passed two numbers as arguments. 
//Calculate the sum of the parameters. If the sum is less than or equal to 25, the function should return true. 
//If not it should return false. Be sure to use an appropriate function name.

console.log("Problem 4");
var testNoMoreThan25 = function(a,b) {
    //return (a+b <= 25);
    var sum = a + b;
    if(sum <= 25) {
        return true;
    } else {
        return false;
    }
}
console.log("test(13,4) : " + testNoMoreThan25(13,4));
console.log("test(13,12): " + testNoMoreThan25(13,12));
console.log("test(13,35): " + testNoMoreThan25(13,35));

// Problem # 5
//Create a function with two parameters. This function will be passed two strings as arguments. Combine both of these strings and assign the result to a variable. If this new string is longer than 12 characters, return "Error, string too long.". Otherwise, return the variable that stores the new string. Be sure to use an appropriate function name.



console.log("Problem 5");
/* var combineStrings = function(a, b) {
} */
function combineStrings(a, b) {
    var s = a + b;
    if(s.length > 12) {
        return "Error, string too long";
    } /*else {
        return s;
    } */
    return s;
}
console.log("combine(foo,bar): " + combineStrings("foo", "bar"));
console.log("combine(webdevfoundations,workspace): " + combineStrings("webdevfoundations", "workspace"));
// Problem #6
//Design a while loop that counts from 0 to 20 using the variable num. If num is between 0 and 5 output "Very Low Number" to the console. If it is between 6 and 10 output "Low Number" to the console. If it is between 11-15 output "High Number" to the console. For everything else output "Very High Number" to the console.

console.log("Problem 6");
var num = 0;
do {
    if(num <= 5) {
        console.log("Very Low Number " + num);
    } else if(num <= 10) {
        console.log("Low Number " + num);
    } else if(num <= 15) {
        console.log("High Number " + num);
    } else {
        console.log("Very High Number " + num);
    }
    num++;
} while(num <= 20);