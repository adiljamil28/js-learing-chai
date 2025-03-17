// primitive data type

// are 7 type : String , Number , Boolean , BigInt , Symbol , null , undefined

let score = 100 //Number
let scoreNum = 100.252 //Number
let isLoggedIn = true //Boolean
let outsideTemp = null //null
let userName // undefined
let stockSharesAmount = 531683846864646846846846846464n //BigInt

let userId = Symbol('123') //Symbol
let anotherId = Symbol('123') //Symbol

console.log(userId==anotherId);


// Reference or non-primitive data types


// Array , Object , Functions

// *************** Array ***************
const superHeros = ["superman" , "krish" , "shaqtiman"] //


// *************** Object ***************

const detailUser =
{
    name : "adil",
    father : "M.jamil",
    phone : '033225458552'
}


// *************** Function ***************

let myFirstFunction = function(){
    console.log("Hello world");
}
myFirstFunction();


console.log(typeof myFirstFunction);



// Return type of variables in JavaScript

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



