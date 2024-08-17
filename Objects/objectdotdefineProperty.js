//* Object.defineProperty(ObjectName, "propertyName", {type:values})
//? types are: value, get, set, enumerable (have to set the values as true or false), 
//? writable (same as the preceeding one), configurable (same as the preceeding one as well)

const obj = {}
Object.defineProperty(obj, "counter", {value:0})
Object.defineProperty(obj, "add", {
  set: function(value){
    this.counter = value
  }
})
Object.defineProperty(obj, "reset", {
  get: function(){
    this.counter = 0
  }
})

Object.defineProperty(obj, "getValue", {
  get: function(){
    return this.counter
  }
})

obj.add = 5
console.log(obj.getValue);
