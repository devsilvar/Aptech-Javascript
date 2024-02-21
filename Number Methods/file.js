// Working With Number and Dates

let num = 56;

// convert it to a string

num = String( num )

console.log( typeof ( num ) )

// First thing to Understand

// When you are recieving anumber from an Inout fied or from an Alert Youhave to ensure that itis stilla number to aviod concatenating them Instaed of calculating them

let num2 = '45'

// check type of Number   =String

// We can alsoselect the Number if it is among the first occurence of a string


let weight = '55kg'

console.log( Number.parseInt( weight ) )

// It removes thenumber 55 because it is the first occurence of the string

let weightReverse = 'kg55'

console.log( Number.parseInt( weightReverse ) )


let weight2 = '5k5g'
console.log( Number.parseInt( weight2 ) )



// MATHS OBJECT

// Lets find teh square root of a Number
let num3 = 16

console.log( Math.sqrt( num3 ) )


// Let say you are given a range of numbers and you were told to get the mx number.How would you go about it

let Ages = [ 12, 16, 11, 22, 27, 49, 28, 31 ]

console.log( Math.max( Ages ) )

// For max to workwehave to spread the array

let highestNum = Math.max( ...Ages )
console.log( highestNum )


// What if we want to get the minimm Number in the Array

// Math.min()
console.log( Math.min( ...Ages ) )

// Lets go Into Decimal Numbers

// If we want to Just remove the decimal Numbers we will use Truc

let height = 23.65
console.log( Math.trunc( height ) )


let breadth = 44.1100
console.log( Math.trunc( breadth ) )


// What if we want to Round it down to a Whole Number = > floor

let radius = 3.142
let diameter = 4.89

console.log( Math.floor( radius ) )
console.log( Math.floor( diameter ) )


// If we want to round Up nomatter the number after the decimalwe will use ceil
console.log( Math.ceil( radius ) )
console.log( Math.ceil( diameter ) )


// Butifwe wnat a normal Roundupfunctionthat checks if thenumber after the decimalis greater than 5 we will use round

console.log( Math.round( radius ) )
console.log( Math.round( diameter ) )


// Ina scenario where we wnat to reduce the numebr of decimalplaces we have in a String we can use To fixed

console.log( 100 / 3 )


// You can see that the number after the decimal placeis quite long

let calc = 100 / 3
console.log( calc.toFixed( 3 ) )


// DATES IN JAVASCRIPT
let presenDate = new Date()

console.log( presenDate )


// there are three more ways that we can access the dates in javascript
let dateFromat1 = new Date( "August 13 2023 12:33:22" )
//  console.log( dateFromat1 )

let dateFormat2 = new Date( "Dec 22 2022" )
//console.log( dateFormat2 )


let dateFormat3 = new Date( '03-08-1994' )

//console.log( dateFormat3 )


function logDate () {
    let capturedDate = document.querySelector( "input" ).value
    console.log( capturedDate )
    console.log( new Date( capturedDate ) )
}


// DATE METHODS
presenDate = new Date()

// we want to get the year
console.log( presenDate.getFullYear() )


//we w want to get the month
console.log( presenDate.getMonth() )
console.log( dateFormat2.getMonth() )

console.log( presenDate.getDay() ) //0 as sunday
console.log( presenDate.getDate() ) // particular date
console.log( presenDate.getHours() ) //gives time based on 24 hour clock
console.log( presenDate.getTime() )  // gives time passed from 1 Jan 1970 till now in milliseconds



//How do we make the date keep running in Js
function Timing () {
    let presentDate1 = new Date()


    let SampleDate = `${presentDate1.getHours()}:${presentDate1.getMinutes()}:${presentDate1.getSeconds()}`

    time.textContent = SampleDate


}
setInterval( () => {

    // Timing()
}, 1000 );