// Array.map()


let myName = "Lotana"
console.log( myName[ 2 ] )

console.log( myName.length )

let namArr = myName.split( "" ).reverse()
console.log( namArr )
// Array.filter()
// Array.reduce()

// mallam
// madam
// dad
// lotana


// write a function to check if a string is a palindrome


// function higherOrder ( callback, message ) {
//     return callback( message )
// }

// higherOrder( console.log, "hello" )



let radiusValues = [ 1, 2, 3, 4, 5 ]

//Math.PI * radiusValues[ 0 ] ** 2

//create a logic
function displayArea ( r ) {
    return Math.PI * r ** 2
}





// displayArea( 2 )


function higherOrder ( callback, arrRadius ) {
    for ( let i = 0; i < arrRadius.length; i++ ) {
        console.log( callback( arrRadius[ i ] ) )
    }
}


higherOrder( displayArea, radiusValues )


