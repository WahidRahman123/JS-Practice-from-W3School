//* This is just normal function with parameters but inside 'this' should be included and semicolon is must.
function person(first, last, city, country){
  this.firstName = first;
  this.lastName = last;
  this.city = city;
  this.country = country;
}

//* To add new object keys:
person.prototype.type = 'Human'

const mySelf = new person("Wahid", "Rahman", "Jhenaidah", "Bangladesh")
const mehedi = new person("Mehedi", "Hasan", "Rangpur", "Bangladesh")

console.log(mehedi);
