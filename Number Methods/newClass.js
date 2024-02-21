let Pi = Math.PI
console.log( Pi )


let a = '23'

a = Number( a )
a = parseInt( a )


let weight = "5k5kg"

// console.log( Number.parseInt( weight ) )

// console.log( Math.sqrt( 64 ) )

// console.log( Math.pow( 4, 3 ) )


// let student = [ 11, 12, 45, 32 ]

// console.log( ...student )

// console.log( Math.max( ...student ) )


// console.log( Math.min( ...student ) )

// let num2 = 34.2738
// let longNumber = 10 / 3
// console.log( Math.trunc( num2 ) )

// console.log( longNumber.toFixed( 4 ) )


// let num3 = 23.2

// console.log( Math.ceil( num3 ) )
// console.log( Math.floor( num3 ) )
// console.log( Math.round( num3 ) )





// Javascript Dates

// way 1
let todaysDate = new Date()
console.log( todaysDate )



// way 2

let date2 = new Date( '2 January 2024 01:13:22' )
let date3 = new Date( 'January 2  2024 01:13:22' )
let date4 = new Date( '2 2024 January 01:13:22' )
console.log( date2 )
console.log( date3 )
console.log( date4 )


console.log( new Date( "Dec 22 2203" ) )


// Assignment1
let day = new Date().getDay()


console.log( day )
let daysOfWeek = [ "sunday", "monday", "tuesday", "wednessday", "thursday", "friday", "saturday" ]
console.log( daysOfWeek[ day ] )

// assigmnet
// create an array of all the month in a year
// use the date method toget the current Month


let hours = new Date().getHours()
console.log( hours )


let minutes = new Date().getMinutes()
console.log( minutes )


let seconds = new Date().getSeconds()
console.log( seconds )


function digitalClock () {
    let hours = new Date().getHours()

    let minutes = new Date().getMinutes()

    let seconds = new Date().getSeconds()

    let clock = `${hours} : ${minutes} : ${seconds}`

    document.getElementById( 'time' ).textContent = clock

}


setInterval( () => {

    digitalClock()
}, 1000 );














