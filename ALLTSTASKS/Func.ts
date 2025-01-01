//Function Overloads

// function combine(a:string,b:string):string; 
// function combine(a:number,b:number):number; 
// function combine(a:any,b:any):any{ 
// if(typeof a === "string" && typeof b === "string"){
//     return a+b;
// }
// if(typeof a === "number" && typeof b === "number"){
//     return a+b;
// }
// }

// console.log(combine("Hello, ","world"));
// console.log(combine(30,20));

function newTask():string; // first overload
function newTask(x:string ,y:string):string; //second overload
function newTask(x:number,y:number):number; //third overload
function newTask(x:any = "Multiple",y:any = "value"):any{ //implementation
    if(typeof x === "string" && typeof y === "string"){
        return `${x} ${y}`;
    }
    if(typeof x === "number" && typeof y === "number"){
        return x*y;
    }
}

console.log(newTask());
console.log(newTask(3,2));

enum status {
    PENDING,
    COMPLETED,
    FAILED
}

