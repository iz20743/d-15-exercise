// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"

let x = "J0hn";
let y = "Doe";
console.log(x + " " + "<>" + " " + y)

// 22) Create an object with properties such name, surname, email
let person = {
    name : "J0hn",
    surname: "Doe",
    email: "johndoe@gmail.com"
};
console.log(person)

// 23) Delete the email property from the previously created object

delete person.email;
console.log(person)

// 24) Create an array with 10 strings in it

let strings = ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]

// 25) Print in the console every string from the previous array

console.log(strings)

// 26) Create an array with 100 random numbers in it

let numbers = []
numbers.length = 100
for (let i = 0; i < numbers.length; i++) {
    let randomNumber = Math.floor(Math.random()* 100) +1 
    numbers[i] = randomNumber
    
}
console.log(numbers)


// 27) Write a function to get the maximum and minimum values from the previously created array


// function minAndMaxValue () {
//    let min = Math.min(numbers[i])
//    return min;
// console.log(min)


// }



// 29) Create a function that gets 2 arrays as parameters and returns the longest one

let a = [2, 4, 5, 6, 6, 7, 8]
let b = [2, 4, 5, 6, 6, 7, 8 , 33, 45]

function longestArray(array1, array2) {
    if(array1 > array2){
        // return array1;
        console.log("array 1 is bigger")
    }
    else{

        // return array2;
        console.log("array 2 is bigger")
        
    }
}
longestArray(a, b);


// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
function higherSum (array1, array2){
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        sum += array1[i]  
    }

    // console.log(sum)
    return sum;


    let sum1 = 0;
    for (let i = 0; i < array2.length; i++) {
        sum1 += array2[i]  
    }
    // console.log(sum1)
    return sum1

if (sum > sum1) {
    console.log("sum of array one is higher" + "" + sum )  
}
else{
    console.log("sum of array two is higher" + "" + sum1)  
}

}
higherSum(a, b)







// 31) Get the element with an id of "container" from the page

const containerNode = document.getElementById("container")

// 32) Get every <td> element from the page

const collumNode = document.querySelectorAll("td")

// 33) Use a loop for printing the text inside of every <td> element in the page

// for (let i = 0; i < collumNode.length; i++) {
//     console.log(collumNode)
    
// }
collumNode[i]