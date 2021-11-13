// Begin. Coding Steps for #1 a & b & C" - WORKING 

let ages = [3,9,23,64,2,8,28,93];

console.log(ages[ages.length-1] - ages[ages.length-ages.length]);
ages.push(30);
console.log(ages[ages.length-1] - ages[ages.length-ages.length]);

// Coding Steps "#1 c" - averageAge " Working

let averageAge = 0;
for (let i = 0; i < ages.length; i++) {
    averageAge += ages[i]
}
console.log(averageAge / ages.length);

// End. Coding for Steps #1 a & b & C" - WORKING


/* Coding Steps for #2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console. */

// Psuedo for the problem
// 1. write a for loop that prints out the number of letters per name
// 2. add those numbers to a variable runningTotal
// 3. write an expression that divides runningTotal by the number of elements in the array
// 4. write a loop that concatenates all the names together  

let names = ["Sam", 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

let runningTotal = names.map(function(elementCount) {
  return (names.length / elementCount.length); 
    
});

 console.log(23 / 6);  // working if I hard code the elementCount.length into the equation


 /* BEGIN #3 3.	How do you access the last element of any array? */ 
// Type the (arrayName.length-1);

// Example
let newNames = ["Sam", 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(newNames.length-1);
//Returns [5]

// END #3


// BEGIN #4	How do you access the first element of any array? 
// type the (arrayName([0]);
// Example
   console.log([0]);

// END #4

// BEGIN #5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.


// END #5 NOT WORKING

/* BEGIN #6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console. */


// END #6 NOT WORKING

// BEGIN #7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function writeTimes(word, n) {
    return word + ' ' + n;
}
var writeWord = writeTimes ('Hello', 3);
console.log('Hello, ' + writeWord);


// END #7 NOT WORKING


/* BEGIN #8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
*/

function creatFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var fullName = creatFullName ('James', 'Brown');
console.log('Welcome, ' + fullName);

// /* END #8. WORKING 


/* BEGIN #9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
let numberArray = [75,10,20,50]

function sumArray(numberArray) {
    var subTotal =0
    for (i=0;i<numberArray.length;i++) {
        subTotal += numberArray[i]
    }
    console.log(subTotal)
    if (subTotal > 100){
        return true;
    }
} 
console.log(sumArray(numberArray));

// /* END #9. WORKING

/* BEGIN #10 Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/ 

anyArray = [1,2,3,4,5];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
console.log(calculateAverage(anyArray));

// END #10 WORKING

/* BEGIN #11 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/ 

firstArray = [110,210,310];


function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
  console.log(calculateAverage(firstArray));

  secondArray = [100,200,300];
    function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    
    });

    return total / count;

    }
    console.log(calculateAverage(secondArray));
    
// END #11 NOT WORKING. 
// 1. I don't know where to put the addition of firstArray + secondArray
// 2. then print the larger number.


/* BEGIN #12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

// END #12 NOT WORKING.


/* BEGIN #13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it. */

// END #13 I'm not clear about functions. I'm spending a few hours so I can understand.