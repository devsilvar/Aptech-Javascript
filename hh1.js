// function callbacks () {
//     console.log( "helo How are you" )
// }

// function HigherOrderFUnc ( func ) {
//     func()
//     console.log( "What is your Message: " )
// }

// // HigherOrderFUnc( callbacks )


// // document.getElementById( "cont" ).addEventListener( "click", doIT() )



// // function () {
// //     alert( "Hell how are your" )
// // }


// // const doit = () => {
// //     return "jordan is smiling"
// // }

// // () => {

// // }


// function showMessage ( msg ) {
//     console.log( "What is yoru message for today: " + msg )
// }




// function higherOrderMsg ( msg, msgFunc ) {
//     msgFunc( msg )
// }

// higherOrderMsg( "Good Morning", showMessage )


// function showOutput ( msg, outputfunc ) {
//     outputfunc( msg )

// }


// showOutput( "Hello Emmanuel", console.log )

// // showOutput( "Hello sucess", alert )


// //showOutput( "What are you doing Jordan", prompt )



// // calculate the Are the Diamter and Circumferenc of a circle based on these values


// let radiuses = [ 1, 2, 3 ]


// let r = radiuses[ 0 ]
// let area1 = Math.PI * r * r


// let r2 = radiuses[ 1 ]
// let area2 = Math.PI * r2 ** 2


// let r3 = radiuses[ 2 ]
// let area3 = Math.PI * r3 ** 2
// // console.log( area1, area2, area3 )

// // let circum1 = 2 * Math.PI * r
// // let circum2 = 2 * Math.PI * r2
// // let circum3 = 2 * Math.PI * r3


// // console.log( circum1, circum2, circum3 )

// radiuses = [ 1, 2, 3 ]

// // Pro
// // Area
// for ( let i = 0; i < radiuses.length; i++ ) {

//     // console.log( Math.PI * radiuses[ i ] ** 2 )
// }

// // Diameter
// for ( let i = 0; i < radiuses.length; i++ ) {
//     //console.log( 2 * radiuses[ i ] )
// }

// //circumference
// for ( let i = 0; i < radiuses.length; i++ ) {
//     // console.log( 2 * Math.PI * radiuses[ i ] )
// }








// radiuses = [ 1, 2, 3 ]

// // for ( let i = 0; i < radiuses.length; i++ ) {
// //     console.log( radiuses[ i ] * 2 )

// // }





// // Area Logic
// function areaLogic ( r ) {
//     return Math.PI * r * r
// }

// // daimeter Logic
// function diameterLogic ( r ) {
//     return 2 * r
// }

// //circumferece Logic
// function circumferenceLogic ( r ) {
//     return 2 * Math.PI * r
// }



// // areaLogic( 5 )
// // diameterLogic( 4 )
// // circumferenceLogic( 2 )


// function higherOrderCircle ( radii, logicfunc ) {


//     for ( let i = 0; i < radii.length; i++ ) {


//         console.log( logicfunc( radii[ i ] ) )


//     }


// }

// // higherOrderCircle( radiuses, areaLogic )
// // higherOrderCircle( radiuses, diameterLogic )
// // higherOrderCircle( radiuses, circumferenceLogic )


// // Map()


// let newAns = radiuses.map( areaLogic )
// console.log( newAns )


// let newArr = [ 1, 2, 3, 4, 5 ]

// // newArr.map(function(){

// // })

// let answer = newArr.map( ( i, index, arr ) => {
//     return arr[ index ]
// } )
// console.log( answer )

// let newFIlter = newArr.filter( ( i ) => {
//     return i % 2 == 0
// } )

// console.log( newFIlter )


// filter()
// reduce()
// split()
// setInterval
// setTimeout


let exampleNumber = '986-895-415'

// how do we test that without Regular Expression
function checkPattern ( exmaple ) {
    let newArr = exmaple.split( '' ).map( ( i ) => Number( i ) ? Number( i ) : i )




    for ( let i = 0; i < newArr.length; i++ ) {
        const singleLetter = newArr[ i ];
        // console.log( newArr )

        // console.log( typeof ( newArr[ 2 ] ) )
        // ###-###-###
        // the index of the ashes are
        // 0,1,2,4,5,6,8,9,11
        switch ( i ) {
            case 0:
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
                if ( typeof ( newArr[ i ] ) !== "number" ) return false;
                break;
            case 3:
            case 7:
                if ( newArr[ i ] !== "-" ) return false;
                break;
        }
    }
    return true
}
console.log( checkPattern( exampleNumber ) )