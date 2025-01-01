// enum Direction {
//     NORTH,
//     SOUTH,
//     EAST,
//     WEST
// }

// function move(direction:Direction){
//     console.log(`Moving ${Direction[direction]}`);   
// }

// move(Direction.NORTH)


// enum Status {
//     PENDING="pending",
//     COMPLETED="completed",
//     FAILED="failed"
// }

// function currentStatus (status:Status){
//     console.log(`Result ${status}`)   
// }

// currentStatus(Status.COMPLETED)


type person = {
    name:string;
    age:number;
}

type user = {
    admin:string;
    role:string;
}

type details = person &  user;

let userdetails: details ={
    name:"dvbn",
    age:56,
    admin:"xcvbn",
    role:"addproduct"
}