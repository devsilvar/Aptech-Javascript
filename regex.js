// -- REGULAR EXPRESSION

// Two ways of creating a regular expressionin javascript

let regEx1 = /abc/;
let regex2 = new RegExp( "abc" );


// They are mainly used for searching the pattern in a string

// It searches for the string pattern based on the Regx Value stated and it matches it

// How does it Maches the string
// - Position Matching
// - Repitition matching
// - Charcter Classes Matching
// - Grouping Matches
// - Back Reference

// now lets text why regular expression is needed

// Let say we want to check a user Input if he entered an Number in this format

let format = "####-####-####";
let exampleNumber = '8854-5565-4535'

// However we expect a Number in each of the palce where we have an ash eg,  3467-3836-9928

// how do we test that without Regular Expression

function checkPattern ( userInput ) {
  //let first check if it is a string
  if ( typeof userInput !== "string" ) {
    return false;
  }

  //lets check if it is greater than 11 digits
  if ( userInput.length !== 11 ) {
    return false;
  }

  //lets check if the user enters a number between the ####-####-####
  //   that is the #### shoudl contain a number

  for ( let i = 0; i < userInput.length; i++ ) {
    const singleLetter = userInput[ i ];

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
        if ( singleLetter < 0 ) return false;
        break;
      case 3:
      case 7:
        if ( singleLetter !== "-" ) return false;
        break;
    }
  }
  return true;
}

// when we check for a number using this format ###-###-### and we enter the right Number we will get a true value

// console.log(checkPattern("345-352-98"));

// NOW HERE IS AN ALTERNATIVE
function regexCheckPattern ( userInput ) {
  // to test for this match we have to use this - ^\d{3}-\d{3}-\d{3}
  return /^\d{3}-\d{3}-\d{3}$/.test( userInput );
  //  $"end of string"
}
console.log( regexCheckPattern( "243-234-577" ) );

// STEP2
// Open REGEX website - https://regex101.com/

// when you have $ at the end of a ReportingObserver, it matches the string from the end

// e.g '/art$/ wil match cart not artyu'

// putting /b at the end of a regex means it will match any varitaion of that astring


// REGEX EXAMPLES

// check if the word a,b, c is in a sentence 
[ abc ]  => /abc/

// check for non vowels word
[^ aeiou ]


//matches every character between a to z (case sensitive)
[ a - z ]


//matches allalphabest both uppercase and lower case
[ a - zA - Z ]

.+
// wont match what is one the next line


/\s/g
// mathces new line and spaces alone


/d/
// targets all digits

[ 0-9 ]
// targets 0 - 9

[[:blank:]]
// targets spaces

// WAYS OF CREATING A REGEX EXPRESION

// without flags

let regexpresion = /abcde/;

// let regexpression2 = new RegExp("patter", [, flags]);

// Diffences and when to USE

// Use the one without flag whne you know the regular expression you are testing against

// use the one with flag whne you don;t know the input you are testing against whie writing the code

// WHAT ARE FLAGS

// -- g is used for global search which means the search will not return after the first match.

// -- i is used for case-insensitive search meaning that a match can occur regardless of the casing.

// -- m is used for multiline search.

// -- u is used for Unicode search.

let wordToTest = "you are the one you are waiting for";

//lets look for the word "you"

let regularExpressionLiteral = /you/gi;
// means checl for the word you continiously
let answer = wordToTest.match( regularExpressionLiteral );

console.log( answer );

// if you were to use loop here is how you might have to do it
function checkforYOU ( userInput ) {
  let getValue = [];
  for ( let i = 0; i < userInput.length; i++ ) {
    const element = userInput[ i ];

    if (
      userInput[ i ] == "y" &&
      userInput[ i + 1 ] == "o" &&
      userInput[ i + 2 ] == "u"
    ) {
      getValue.push( "you" );
    }
  }
  console.log( getValue );
}

checkforYOU( wordToTest );

// NOTE: IF THE ANSWER IS NOT THERE IT WILL RETURN A NULL

// USING REXEX CONSTRUCTOR
//preferable for dynamic inputs

let regEX = new RegExp( "you", "g" );
let ans1 = wordToTest.match( regEX );
console.log( ans1 );

// SPECIAL CHARACTERS

// ^^^^^^

const regexPattern1 = /^cat/;

console.log( regexPattern1.test( "cat and mouse" ) ); // Output: true

console.log( regexPattern1.test( "The cat and mouse" ) ); // Output: false because the line does not start with cat

// Without the ^ in the pattern, the output will return true
// because we did not assert a boundary.

const regexPattern2 = /cat/;

console.log( regexPattern2.test( "The cat and mouse" ) ); // Output: true

// &&&&&&&
const regexPattern = /cat$/;

console.log( regexPattern.test( "The mouse and the cat" ) ); // Output: true

console.log( regexPattern.test( "The cat and mouse" ) ); // Output: false

// when we use the flag \b we match every word that end in the specified word


// EXAMPLE
let regEx2 = /\bhello/g  "match every word that starts with helllo"
let regEx3 = /war\b/g  "match every word that starts with war in a sentence"




// \d – matches any decimal digit and is shorthand for [0-9].
// \w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
// \s – matches any white space character.
// \D – matches any non-digit and is the same as [^0-9.]
// \W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
// \S – matches a non-white space character.
// . – matches any character



// CHARACTER CLASS

// when we say character class, maybe we want to match number, small letters , capiatal letters, special characters,

// There are clasese of character, now, how do we match them
for capital letters[ A - Z ]

for small letters[ a - z ]

for number[ 0 - 9 ]


// Matches any character not listed inside the brackets

// const regexPattern = /[^bc]at/;

// console.log(regexPattern.test('bat')); // Output: false

// console.log(regexPattern.test('cat')); // Output: false

// console.log(regexPattern.test('mat')); // Output: true



// REGEX FOR EMAIL
const regexPatternForEmail = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$\i/

// REGEX FOR PAssword

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/


// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)

