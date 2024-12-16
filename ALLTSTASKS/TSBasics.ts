//infer types  //automatically detect type (lmplicit type)
// let userName="TypeScript";
// userName=0 

// Defining Type (Explicit type)

// let userName:string='typeScript';
// let count:number=30;
// let isloged: boolean=true;
// let skils:string[]=['js','css','ts'];
// let number:number[]=[1,2,3,4];
// let empty:[]=[];

// let userDetails:{name:string; age:number}={
//     name:"Anjali",
//     age:21
// };

//interface & type
//interface

// interface Details {
//     name : String;
//     age : number;
//     salary : number;
//     getName:() => void;
// }

// let user: Details= {
//     name:"Maya",
//     age:25,
//     salary:30000,
//     getName() {
//         console.log(this.name);
        
//     },
// };


//Type

// type Details = {
//     name : String;
//     age : number;
//     salary : number;
// }

// let user: Details= {
//     name:"Maya",
//     age:25,
//     salary:30000
// };

//Union/Optional
//union

// type Details = {
//     name : String;
//     age : number | string;
//     salary : number;
// }
// let user: Details= {
//         name:"Maya",
//         age:"25",
//         salary:30000
//     };

// let Skils:(string  | number | boolean)[]=['js','css','ts', 40 , 30 , 25 ];

//Optional

// type Details = {
//     name : String;
//     age : number | string;
//     salary? : number;
// }
// let user: Details= {
//         name:"Maya",
//         age:"25",
//     };

//Funtions

// type Details = {
//     name : String;
//     age : number;
//     salary : number;
//     getName?:()=>void;
// }
// let user: Details= {
//     name:"Maya",
//     age:25,
//     salary:40000
// };

// function getUsername(userDetails:Details){
//     return userDetails.name;
// }
// getUsername(user)

//no reusability case

// function getUsername({name,age} : { name: string; age: number }){
//      name 
//      return age
// }
// getUsername({name:"Anu",age:55})

//Union & Intersection type
//Union

// let value :string | number;
// value = 40;
// value = "Hello";
// console.log(value);

//Intersection

// interface Person{
//      name:string;
//      age:number;
// }

// interface Employee{
//      employed:number;
// }

// type EmployeePerson = Person & Employee;

// let employee:EmployeePerson={
//      name:"Alice",
//      age:30,
//      employed:1234
// }
// console.log(employee);

