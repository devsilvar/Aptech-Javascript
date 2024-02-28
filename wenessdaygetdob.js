// Javascript Modules

// Having a large amount of code in a single file can be problematic, so it's helpful to split the code into multiple parts. This is where modules come in handy.


//  What is a Module?

//  JavaScript modules are a way to organize and structure code. They allow developers to break their code into smaller, reusable pieces. You can think about them as smaller pieces of code that you can import and export between different parts of an application.


// BENEFITS OF USING MODULES
// - More Organized Code
//   - Code Reusability
//     - No Naming Conflicts



// LETS DEFINE A MODULE

export function getDOB ( age ) {
    // ENTER YOUR AGE
    return 'You are born in ' + ( 2024 - age )
}

export const greetings = ( time ) => {
    return `Good ${time}`;
}


export function addthreeNumber ( a, b, c ) {
    return a + b + c
} 