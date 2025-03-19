let Name = "Adil"
let Age = 30
let course = "javaScript"

// console.log("My name is " + Name + " and my age is "+ Age + " and i am learning "+ course ); // old way for concatination

// console.log(`My name is ${Name}  and my age is ${Age} and i am learning ${course} `); //this the newest way to concatination


let comp = new String ('computer')

// console.log(comp);


// String methods
 
// console.log(typeof comp);
// console.log(comp.length);
// console.log(comp.toUpperCase());
// console.log(comp.toLowerCase());


console.log(comp.charAt(5)); //kis index pay konsa Character hai
// console.log(comp.indexOf("t")); //ye Character kis index pay hai

// console.log(comp.substring(0,4)); //string k 0 se 4 tak k character print karega jo 0 se 4 index pay hai


const newComp = comp.substring(0,4);
// console.log(newComp);

const anotherComp = comp.slice(-2,7);
// console.log(anotherComp );

const trimAnotherComp = "   machine-Learing   "
//  console.log(trimAnotherComp.trim()) //  its remove spaces in text only

const repAnotherdata = "https//wowdot%20thespace%20issues.com"

// console.log(repAnotherdata.replaceAll('%20','-'));
// console.log(repAnotherdata.includes(' '));
// console.log(repAnotherdata.replace('%20', '-'));


const newSplitData = "https//wowdot%20thespace%20issues.com"
// console.log(newSplitData.split('%20'));
// Answer : [ 'https//wowdot', 'thespace', 'issues.com' ]



// NOTE : METHOD WE LEARN 

1-split
2-replace
3-replaceAll
4-includes
5-trim
6-slice
7-substring
8-charAt
9-toUpperCase
10-toLowerCase
11-length

// ===================================================


// Here’s the list of common methods between strings and arrays in JavaScript:

concat()
includes()
indexOf()
slice()
toLowerCase()
toUpperCase()
length