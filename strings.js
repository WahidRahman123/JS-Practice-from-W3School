let a = new String('Wahid')
let b = new String('Wahid')

console.log(a==b);  //Output: false
console.log(a===b); //Output: false

let c = 'Wahid'
console.log(a==c); //Output: true
console.log(a===c); //Output: false

let str = 'Apple, Banana, Kiwi'
console.log(`Main String: ${str}`);

let part = str.slice(7)
// let part = str.slice(7, 13)

console.log(`Main String after positive slice: ${str}`);
console.log(`Positive Slice: ${part}`);

let negPart = str.slice(-1)
// let negPart = str.slice(-12, -6)
console.log(`Main String after negative slice: ${str}`);
console.log(`Negative Slice: ${negPart}`);

// const sub = str.substr(7,4)
const sub = str.substr(-4)
console.log(sub);


const text = '455'
const paddedText = text.padStart(4, '0')
console.log(paddedText);

console.log(paddedText.charAt(2));
//or
console.log(paddedText[2]);


//* A string can be converted to an array with the split() method:

const txt = 'wahid rahman raza, mehedi, rakib'

let arr = txt.split(' ')   //* Split on spaces 
let arr1 = txt.split(',')  //* // Split on commas

let specialArr = txt.split('')
console.log(typeof arr);
console.log(arr);
console.log(arr1);
console.log(specialArr);