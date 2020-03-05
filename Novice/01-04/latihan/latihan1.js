const firstString = '2 + 2'; // Create a string literal value
const secondString = new String('2 + 2'); // Create a String Object
eval(firstString); // Return the number 4
eval(secondString); // Return the string "2 + 2"
