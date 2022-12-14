// Arrays

// Create and array of tv shows. Loop through and print each show 
// to the console
let tvShows = ['Seinfeld', 'The Simpsons', 'Barreta']
tvShows.forEach( show => console.log( show ))

let favShow = ['seinfeld', 'the simpsons', 'cheers']
favShow.forEach( fave => console.log( fave ))

// Create and array of numbers
let nums = [21, 56, 88, 24, 99, 710] 
// Return a new array of numbers that includes every even number 
// from the previous Arrays
let onlyEvens = arr => arr.filter( n => n % 2 === 0 )

console.log(onlyEvens( nums ))
// Create a function that takes in an array of numbers
// Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
    let sorted = arr.sort((a,b)=> a-b)
    alert( sorted[1] + sorted[ sorted.length - 2] )
}
sumSecondLowAndHigh([2,3,1,5,4])




// ****************Second Round******************

// Create and array of tv shows. Loop through and print each show to the console
let favTvShows = ['Seinfeld', 'The Simpsons', 'Flinstones']
favTvShows.forEach(comedy => console.log(comedy))

let fruits = ['cherries', 'oranges', 'apples']
fruits.forEach( item => console.log(item) )

let colors = ['blue','green','purple','brown']
colors.forEach(rainbow => console.log(rainbow))

let birds = ['hawk', 'pigeon', 'parrot']
birds.forEach(flyer => console.log(flyer))

let favPeople = ['Mom','Rudy','Cris']
favPeople.forEach(person => console.log(person))

// Create and array of numbers
// Return a new array of numbers that includes every even number from the previous Arrays

// let arrNums = [20, 37, 2, 86, 1, 5, 4, 10, 100, 88]
// let onlyEvenz = arr => arr.filter ( n => n % 2 === 0 )

// console.log(onlyEvenz(arrNums))

// let theseNums = [1, 5, 4, 13, 17, 46, 9]
// let theseEvens = arr => arr.filter (t => t % 2 === 0)
// console.log(theseEvens(theseNums))

// *********** Odds **************

let oddNums = [1, 4, 3, 13, 66, 23, 11, 67, 99, 209]
let onlyOdds = arr => arr.filter (o => o % 2 !== 0)

console.log(onlyOdds(oddNums))

// Create a function that takes in an array of numbers
// Alert the sum of the second lowest and the second highest number



// REVIEW, ENKI, GRIND AND LEARN THIS
function sumSecondLowAndHi (arr) {
    let sorted = arr.sort((a,b)=> a-b)
    alert( sorted[1] + sorted[ sorted.length - 2])
}
sumSecondLowAndHi([2,3,1,5,4])


// ************** OBJECTS *************

// OBJECTS ARE A COLLECTION OF VARIABLES AND FUNCTIONS. 
// OBJECTS REPRESENT THE ATTRIBUTES AND BEHAVIOR OF SOMETHING USED IN A PROGRAM
// OBJECT VARIABLES ARE CALLED PROPERTIES AND OBJECT FUNTIONS ARE CALLED METHODS
// OBJECTS STORE "KEYED COLLECTIONS"