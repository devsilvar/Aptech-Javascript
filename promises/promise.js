// const promise1 = new Promise( ( resolve, reject ) => {
//     if ( true ) {
//         resolve( "I am the first Guy" )

//     } else {
//         reject( "Conetnt not loaded" )
//     }
// } )

// const promise2 = new Promise( ( resolve, reject ) => {

//     setTimeout( resolve, 3000, "I took 3 second before i ran " )

// } )

// const promise3 = new Promise( ( resolve, reject ) => {
//     setTimeout( resolve, 5000, "I took 5 seconds before i ran" )
// } )

// const promise4 = new Promise( ( resolve, reject ) => {
//     setTimeout( resolve, 2000, "i Took 2 seconds before i ran" )
// } )

// Promise.all( [ promise1, promise2, promise3, promise4 ] ).then( function ( data ) { console.log( data ) } )

// setTimeout( () => {
//     console.log( "I supose to be the first Guy" )
// }, 10 );

// console.log( "I am the first Guy" )
// console.log( "I am the ssecond Guy" )

// fetch( "https://jsonplaceholder.typicode.com/posts" ).then( resp => resp.json() ).then( data => console.log( data ) )

// ASYNC AWAIT
async function displayPost () {
    let response = await fetch( 'https://fakestoreapi.com/products/' );
    let data = await response.json();

    console.log( data );

    if ( data.length == 20 ) {
        data.map( function ( item ) {
            return ( document.querySelector(
                '.post'
            ).innerHTML += `<div class="product"> <h4>  ${item.title} </h4>  
                
                <br>
<sup> ${item.category}</sup>   
<img src="${item.image}">
<p>${item.price}</p>
<p>  ${item.description}</p>   </div>` );
        } );
    } else {
        document.querySelector( '.post' ).innerHTML = `<h2>....loading</h2>`;
    }
}

function addme () {
    return 34;
    console.log( diucbd );
    console.log( object );
}

displayPost();
