//Function Overloads
function newTask(x, y) {
    if (x === void 0) { x = "Multiple"; }
    if (y === void 0) { y = "value"; }
    if (typeof x === "string" && typeof y === "string") {
        return "".concat(x, " ").concat(y);
    }
    if (typeof x === "number" && typeof y === "number") {
        return x * y;
    }
}
console.log(newTask());
console.log(newTask(3, 2));
