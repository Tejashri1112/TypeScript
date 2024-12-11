console.log("Hello Typescript")

/*Variable In Typescript*/
console.log("1. Variables : ")
let a=1;
//num='hello';  we cannt assign string value to num variable because its type infered as number 
console.log("using let : ",a);

const c='bluebenz';
console.log("using const : ",c);

// 2. datatypes
console.log("2. Datatypes IN Typescript")
let n:number=100;
console.log("number : ",n);

let b:boolean=true;
console.log("Boolean : ",b);

let s:string='Bluebenz';
console.log("strng : ",s);

// 3. falsy value
console.log("3. falsy value : 0 , '',null,undefined ");

// 4. Type Assignment

console.log("4. Type Assignment");
const num1:number=100;
console.log("number type :",num1);
const str1:string='Bluebenz';
console.log("string type : ",str1);
const result:boolean=true;
console.log("boolean type : ",result);

// 5 . object type
console.log("5. object type");
let ob1={
    name:'geeta',
    age:20
}
console.log("inference type object ",ob1); // cannot add any property after declaration

let ob2:object={
    name:'reeta',
    age:20
}

console.log(ob2.name);
console.log(ob2["age"]);
console.log("Object After Type Assignment ",ob2);
