//* Syntax:
//* /pattern/modifiers;
/*Example:
  /wahid/i
*/

//! Regular expressions are often used with the two string methods: search() and replace()

//* Modifiers and their usage:
// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching


//* Regex methods:
pattern.test("The sentence.")       //Returns true or false
pattern.exec("The sentence.")       //Returns the found text as an object
toString()