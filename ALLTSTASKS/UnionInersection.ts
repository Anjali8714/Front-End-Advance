// function PrintId(id:string | number){
//     if(typeof id === "string"){
//         console.log(`ID : ${id.toUpperCase()}`);        
//     }else{
//         console.log(`ID:${id}`);
        
//     }
// }

// //PrintId("abc123");
// PrintId(123);

interface Drivable {
    drive():void;
}
interface Flyble{
    fly():void;
}

type FlyingCar = Drivable & Flyble;

const myFlyCar:FlyingCar={
    drive() {
        console.log("Driving...");       
    },
    fly() {
        console.log("Flying...");
        
    },
}

//myFlyCar.drive()
myFlyCar.fly();