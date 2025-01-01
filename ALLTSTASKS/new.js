// infer (lmplicit)
// let name = "Anjali";
// name = 20;
//define(explicit)
// let name:string = "anjali";
// let age:number = 30;
// let bool:boolean = true;
// let arrstr:string[] = ["1","b","c"];
// let arrnum:number[] = [1,2,3,4,5];
// let emptyarr:[] = [];
// let emptyobj:{} = {};
// let obj:{name:string,age:number,salary:number} = {
//     name:'anju',
//     age:33,
//     salary:3000
// }
// console.log(name);
//interface
// interface Details {
//     name:string;
//     age:number;
//     salary:number;
//     getName:()=>void;
// }
// let obj:Details = {
//         name:'anju',
//         age:33,
//         salary:3000,
//         getName():void {
//             console.log(this.name);
//         }
//     }
// export {}
// interface Person {
//     name:string;
//     age:number;
//     greeting :() => void;
// }
// const user:Person = {
//     name:"dfghj",
//     age:65,
//     greeting() {
//         console.log('sdfvgbhjvcfgbh');        
//     },
// }
//type
// type Details = {
//     name:string;
//     age:number;
//     salary:number;
//     getName:()=>void;
// }
// const user:Details = {
//     name:'anju',
//     age:33,
//     salary:3000,
//     getName():void {
//         console.log(this.name);
// }
// }
//union and optional
//union
// type Details = {
//     name:string;
//     age:number | string;
//     salary:number;
//     getName:()=>void;
// }
// const user:Details = {
//     name:'anju',
//     age:"33",
//     salary:3000,
//     getName():void {
//         console.log(this.name);
// }
// }
//optional
// type Details = {
//     name:string;
//     age:number | string;
//     salary?:number;
//     getName:()=>void;
// }
// const user:Details = {
//     name:'anju',
//     age:"33",
//     // salary:3000,
//     getName():void {
//         console.log(this.name);
// }
// }
//functions
// interface Person {
//     name:string;
//     age:number;
//     greeting :() => void;
// }
// const user:Person = {
//     name:"dfghj",
//     age:65,
//     greeting() {
//         console.log('sdfvgbhjvcfgbh');        
//     },
// // }
// function getUserDetails(user:Person){
//      user.name
//      user.age
//      return user.greeting
// }
// getUserDetails(user)
// interface Person {
//     name:string;
//     age:number;
//     greeting :() => void;
// }
// const user:Person = {
//     name:"dfghj",
//     age:65,
//     greeting() {
//         console.log('sdfvgbhjvcfgbh');        
//     },
// }
// function getUserDetails({name,age} :{name:string,age:number}){   
// }
// getUserDetails({name:"fgbh" , age:20})
//Named types (custom types)
// type statustypes = "pending" | "completed" | "failed";
// let currentStatus:statustypes =""
// function add (a:number , b:number) : void /*number */ {
//     console.log(a*b);
//     // return a+b
// }
// // console.log(add(2,3));
// add(2,3)
// const adding:(x:number,y:number) => number = function (x ,y): {
//     return x * y 
// }
// const adding:(x:number , y:number) => number = function (x,y){
//     return x * y
// }
// console.log(adding(2,3));
// type person = {
//     Name:string;
//     age:number;
// }
// type employee = {
//     salary:number | string;
// }
// type employeeDetails = person & employee;
// let Employee:employeeDetails = {
//     Name:"anjali",
//     age : 21,
//     salary : 25000
// }
// console.log(Employee);
// type stringornumber = string | number;
// let value:stringornumber;
// value="anjali";
// console.log(value);
// let value : string = "HEllo,My dear";
// // let strlength = (value as string).length;
// let strlength = (<string>value).length;
// console.log(strlength);
//enum types
//Number enum
// enum Direction{
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// // console.log(Direction.LEFT);
// console.log(Direction[0]);
//String enum
// enum Status {
//     PENDING="pending",
//     FULFILLED="fulfilled",
//     REJECT="reject"
// } 
// console.log(Status.FULFILLED);
//Heterogeneous enum
// enum Result{
//     Pass="Result",
//     Fail=0
// }
// console.log(Result.Fail);
// Named types
// type status = "pending"|"completed"|"failed";
// let currentStatus:status="completed";
// //from API
// let res="completed";
// if(res === "completed"){
//     console.log("Current Status:", currentStatus);
// }else{
//      console.log("false this statement");
// }
//Generic
// function getAge<T>(age:T):T{
//     return age
// }
// getAge(20)
// getAge<string>("20")
//Generic in another way write
// type UserDetails={
//     name:string;
//     age:number
// }
// type AdminDetails={
//     firstName:string;
//     role:string
// }
// const userDetails:UserDetails={
//     name:"anjali",
//     age:21
// }
// const adminDetails:AdminDetails={
//     firstName:"Front-End",
//     role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// let userValue=getDetails<UserDetails>(userDetails);
// let adminValue=getDetails<AdminDetails>(adminDetails);
//intersection
// type UserDetails={
//     name:string;
//     age:number;
// }
// type AdminDetails = UserDetails & {
//     role:string;
// }
// // type AdminDetails = UserDetails;
// // }
// const userDetails:UserDetails={
//     name:"anjali",
//     age:21
// }
// const adminDetails:AdminDetails={
//     name:"anjali",
//     age:21,
//     role:"admin"
// }
// function getDetails<T>(details:T):T{
//     return details
// }
// let userValue=getDetails<UserDetails>(userDetails);
// let adminValue=getDetails<AdminDetails>(adminDetails);
// interface UserDetail {
//     name:string;
//     age:number;
// }
// interface AdminDetail extends UserDetails {
//     role:string
// }
// // interface AdminDetail extends UserDetails {}
// const userDetail:UserDetails={
//     name:"anjali",
//     age:21
// }
// const adminDetail:AdminDetails={
//     name:"anjali",
//     age:21,
//     role:"admin"
// }
// function getDetail<T>(details:T):T{
//     return details
// }
// let userValues=getDetail<UserDetail>(userDetail);
// let adminValues=getDetail<AdminDetail>(adminDetail);
//Enums
// type status = "pending"|"completed"|"failed";
// const enum statustypes {
//     PENDING,
//     // PENDING=1,
//     //PENDING="pending",
//     COMPLETED,
//     FAILED
// }
// function getstatus (orderId:number , status:statustypes){
//     console.log(orderId , "=" , status);
// }
// getstatus(123,statustypes.FAILED)
//as const
// let tutorial = "codeEvolution" as const;
// tutorial = "debug Media";
//keyof typeof
var statustypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed",
};
function getstatus(orderId, status) {
    console.log(orderId, "=", statustypes[status]);
}
getstatus(123, "PENDING");
