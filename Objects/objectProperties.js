const obj = {
  firstName: "Wahid", 
  lastName: "Rahman",
  country: "Bangladesh",
  age: 25
}

Object.preventExtensions(obj)

obj['fullName'] = 'mehe hasan'

console.log(obj);
console.log(Object.isExtensible(obj));
