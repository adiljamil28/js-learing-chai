// MATH ARRAY IMPORTANT NOTE
// push() 
// pop() 
// shift()
// unshift() 
// map()
// filter()
// reduce() 
// forEach() 
// includes() 
// indexOf() 
// sort() 
// join() 
// find() 
// findIndex()
//concat()

const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(6,7,8,9);

// console.log(myArr[1]);
// console.log(myArr2.push(5));

// console.log(myArr2);
// console.log(myArr2.indexOf(2));
// console.log(myArr2.join());
// console.log(myArr2.slice(1 , 2));
// console.log(myArr2.splice(1 , 2));

// console.log(myArr2.shift());
// console.log(myArr2);

// console.log(myArr2.unshift());
// console.log(myArr2);

// console.log(myArr.concat(myArr2));

const arr3 = myArr.concat(myArr2)
// console.log(arr3);

const arry4 = [...myArr2.concat(...myArr)]
// console.log(arry4)

const arry5 = [...myArr2.join(...myArr)]
// console.log(arry5)

