
// problem 1
var myNumber = 27;
 var  array = [18, 24, 57, 98, 45,27, 3, 456, 3, 35, 85];
 var  location = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] == myNumber) {
        myNumber = array[i];
    }
}
console.log(myNumber);


// Probelm 2

var myArray = [18, 24, 57, 98, 45,27, 3, 456, 3, 35, 85];
 var myTotal = 0;

for(index in myArray) {
    myTotal += myArray[index];
}
console.log(myTotal);

// or problem # 2  this way
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
for (var i = 0, sum = 0; i < numArray.length; sum += numArray[i++]);
var sum = sum
console.log(sum) 

// Problem 3

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var popped = myNumbers.pop();
console.log(myNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9 ] 
console.log(popped); // 10

//  or you can do problem # 3 this way
var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ary.pop();
console.log(ary)
var ary2 = [];
for (var i =1; i <=10; i++){
    ary2[i-1]=i;
console.log(ary2);
}

//  Problem 4


var num = add(12, 13);
function add(x, y){
  return x + y;
 }
 console.log(num);
 if ( num <= 25) {
	console.log("true , the sum is less than or equal to " + num);
} else {
	console.log("false , the sum is less than or equal to " + num);
}

// or 
console.log("promlem 4");
var testNomoreThan25 = function (a,b)[{
    // return (a+b <= 25);
    var num = 25

    if (sum <=25){
        return true;
    
    }else {return false;
        }
}

// Problem 5

function combineStrings(a, b) {

    var s = a + b ;
    if (s.length > 12){
    return "error , string too short";
}
return s;


// Problem 6

console.log("probelm 6 ")
