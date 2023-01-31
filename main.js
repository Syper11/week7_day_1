// print Statement like python
console.log('hello world') 

/* multyline
commit*/

x = 1
y = 2
z= x + y
console.log(z)

// in JS, you need to declare a varible
var x = 1
var y = 2
var z = x + y

console.log(typeof z)
var w = 4.4
console.log(typeof w);
// ; next line of code
//JS is a compiled lang don't need ti indent;

var name = 'tiger'
var name2 = "brett"
var name3 = `luck`

console.log(name,name2,name3);
console.log(typeof name)

// lists in JS, are known as arrays
var names = ['brett','lucky']

console.log(names);
console.log(typeof names);
// To xheck if something is a array

console.log(Array.isArray(names));

// dictionary in js abject (JSON);
var first_name = 'brett'
var obj = {
    'content-type': 'application/json',
    "grades": [100,100,100],
    first_name : first_name
};
console.log(obj)

// JS hoisting
console.log(random)
var random = "random"
console.log(random)

//Declare,define, inassigned
var num; // I am declaring num
console.log(num)
num = 1; // assigning value to num
console.log(num)
num = null
console.log(num)

// insr=treaad of using var, use let and const
// let and const do not host


let random2 = "yessssssssssssssss"
console.log(random2)

// let and const are both used as variable declarations
// newer ES6 syntax
let fav_num = 10;
const fav_color = "blue";
console.log(fav_num);

//const can not be reassigned
fav_num += 13
console.log(fav_color);
console.log(fav_num);


// use const until you have too use let
//let and const are also block level declarations

// math
// +

let sum = 5+6;
console.log(sum);
sum ++;
console.log(sum);
// -

let diff = 5+6;
console.log(diff);
diff -= 4;
console.log(diff);

// *

let prod = 5*6;
console.log(prod);
prod *= 4;
console.log(prod);

// /

let quo = 30/5;
console.log(quo);
quo / 5;
console.log(quo);

// squares

let square = 2**5;
console.log(square);
square **= 2;
console.log(square);

// more math stuff
const floor = Math.floor(24.78);
console.log(floor);
const ceil = Math.ceil(24.78);
console.log(ceil);

// insstresting things
const num1 = 2 
const num2 = "3"
const res = num1 + num2
console.log(res)
console.log(typeof res)

// parsInt() and parseFloat()

console.log(parseInt('24.7'), typeof parseInt('24.7'))
console.log(parseFloat('24.7'), typeof parseFloat('24.7'))

/*----------JS funstions--------------*/
console.log('------------JS func------------')

// reg named function
function nameOffunction(param1, param2){
    // code goes here
    const output = param1 + param2;
    return output

};
console.log(nameOffunction(100,200))
console.log(nameOffunction("Le","Bron"))

// nameless function, but storing it to same varible
const squareMe = function (num){
    return num**2
}
console.log(squareMe(7))
console.log(squareMe(5))

// arrow function is the new ES6 way to create function

//format: () => {}
//(params go here) => {this is the code block};

const cubeMe = (num)=>{
    return num**3
};
console.log(cubeMe(3))


// arrow function with no paramaters

const a1 = () => {return'nothing here'};
console.log(a1())

//if only onf function
const a2 = num => {return num**2};
console.log(a2(9))

// arropw function with two or more

const a3 = (num1,num2) => {return num1 + num2};
console.log(a3(9,23))

// single line return if its simple stuff

const a4 = (num1,num2) =>  num1 + num2;
console.log(a4(9,23))

// scop is still a thing

let test = 1;
const testfunc = () => {
    let test = 4;
    console.log(test)
};
console.log(test);
testfunc();

// self invoking function
(() =>{
    console.log('this is it')
})();
//another one with function keyword
(function(){console.log('another one')})();

const outer = () => {
    let counter = 0 // privater varible
    const inner = () => {
        return counter ++
    };
    return inner // setter funstion
};
const addtocount = outer()
console.log(addtocount())
console.log(addtocount())

console.log('--------------if statement---------------');
// if statements
// syntax: if (condition) {code block}
const ifTest = num => {
    if (num<10){
        console.log('small number')
    }
    else if (num < 20) {
        console.log('medium num')
    }
    else {
        console.log('big one')
    }
};

ifTest(5);
ifTest(15);
ifTest(30);

// ternary operator
//python:(do this if true) if condition else (do this if false)
// JS: (condition) ? (do this if true) : (do this if false)
const getfee1 = isMember => isMember ? '$2.00' : '$10.00'


const getfee2 = isMember => isMember ? '$2.00' : '$10.00'

console.log(getfee2(true));
console.log(getfee2(false));

//loop section

