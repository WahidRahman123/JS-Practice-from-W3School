//* To convert the JSON script, we have to put JSON script into a text format.
let text = '{"employees": [' +
          '{"firstName": "Wahid", "lastName": "Rahman"},' +
          '{"firstName": "Mehedi", "lastName": "Hasan"},' +
          '{"firstName": "Maisha", "lastName": "Maliha"}]}';

const obj = JSON.parse(text)

console.log(obj);
console.log(obj.employees[2].firstName);