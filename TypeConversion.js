//* The Complete List: 
//* [In JavaScript there are 5 different data types that can contain values:
    //* string
    //* number
    //* boolean
    //* object
    //* function
//* ]

//* Converting into Numbers:
Number()            //Returns a number from all
parseFloat()        //Returns a floating point number
parseInt()          //Returns an integer
getTime()           //Date to Number  


//* Converting into Strings:
String()            //Returns a string from all
toString()          //Returns a string from all
toExponential()     //Returns a string, with a number rounded and written using exponential notation
toFixed()           //Returns a string with fixed number after decimal point
toPreceision()      //Returns a string, with a number written with a specified length
getDate()           //Date to String
getDay()            //Date to String
getFullYear()       //Date to String
getHours()          //Date to String
getMilliseconds()   //Date to String
getMinutes()        //Date to String
getMonth()          //Date to String
getSeconds()        //Date to String



//* Examples:
Number('3.14')      //3.14
Number(Math.PI)     //3.14
Number(" ")         //0
Number("")          //0
Number("99 88")     //NaN
Number("John")      //NaN
(123).toString()
let x = 9.656;
x.toExponential(2);
x.toFixed(2)