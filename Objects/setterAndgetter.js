const obj = {
  firstName: 'Wahid',
  set rename(name){
    this.firstName = name
  },
  get getName(){
    return this.firstName
  }
}

//! Don't use parenthesis while calling getter or setter.
console.log(obj.getName);
//! Don't use parenthesis while calling getter or setter.
obj.rename = 'Mehedi';
console.log(obj.getName);