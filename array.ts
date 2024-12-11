//6. Array In Typescript
console.log("array in Typescript");

// way to declare array
let array1:Array<number>=[39,9,89];
console.log(array1);
// way to declare array
let array2:number[]=[98,996];

console.log("1. Array without Assigning Type");
const arr1=[10,20,30];
console.log(arr1);

console.log("2. Array type");
const arr2:number[]=[100,200,300];
console.log("Numbered array",arr2);

const arr3:string[]=['hello','Typescript'];
console.log("String Array : ",arr3);

const arr4:(string | number)[]=['hi',100,'world'];
console.log("string and number type array : ",arr4);

console.log("3. Iterate array elements : ");
for(let n of arr2)
{
    console.log(n);
}

//add element in array 
console.log("4. add element to array using push()");
arr2.push(2000);
console.log(arr2);

// accessing array element
console.log("display first element of arr2 :",arr2[0]);

// map() method
console.log("map() method")
let num:number[]=[1,2,3,4,5];
let num2=num.map(num=>num*2);
console.log(num2);

// filter() method
console.log("filter method")
let array3:number[]=[1,2,3,4,5,6];
let doublearr3=array3.filter(num=> num>3);
console.log(doublearr3);

// forEach()
console.log("forEach() method");
let array4:number[]=[1,2,3,4,5,6];
let doublearr4=array4.forEach(num=> console.log(num+1));

// find()
console.log("find() method");
let array5:number[]=[34,33,22,22,23];
let doublearr5=array5.find(n=> n>21);
console.log(doublearr5);

