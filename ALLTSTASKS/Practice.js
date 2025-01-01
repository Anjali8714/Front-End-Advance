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
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["COMPLETED"] = "completed";
    Status["FAILED"] = "failed";
})(Status || (Status = {}));
function currentStatus(status) {
    console.log("Result ".concat(status));
}
currentStatus(Status.COMPLETED);
