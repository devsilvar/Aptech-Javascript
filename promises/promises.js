


const promise = new Promise( ( resolve, reject ) => {
    if ( true ) {
        resolve( "COntent Loaded" )
    } else {
        reject( "Error, Not Available" )
    }
} )





const promise2 = new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 100, "Are youu there" )
} )

const promise3 = new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 1000, "Comming to get You" )
} )

const promise4 = new Promise( ( resolve, reject ) => {
    setTimeout( resolve, 3000, "When will you be back" )
} )

Promise.all( [ promise, promise2, promise3, promise4 ] ).then( values => {
    console.log( values )
} )



// uRL samples - get urls from json placeholder
const urls = [
    '', '', ''
]

Promise.all( urls.map( url => {
    fetch( url ).then( response => response.json() ).then( data => {
        console.log( data[ 0 ] )
        console.log( data[ 1 ] )
        console.log( data[ 2 ] )
    } )
} ) )


// convert Promises to async await
movePlayer( () => movePlayer( 100, up ) )
    .then( () => movePlayer( 200, left ) )
    .then( () => movePlayer( 400, left ) )
    .then( () => movePlayer( 300, Right ) )
    .then( () => movePlayer( 200, bottom ) )
    .then( () => movePlayer( 100, left ) )



// lets use a more realisteic example

async function movePlayer () {
    await movePlayer( 100, up )
    await movePlayer( 200, left )
    await movePlayer( 400, left )
    await movePlayer( 300, Right )
    await movePlayer( 200, bottom )
    await movePlayer( 100, left )
}



// Now lets use a more realistic Example and grab some API


