var math_marks = +prompt("Enter Your Math Marks");
var urdu_marks = +prompt("Enter Your Urdu Marks");
var physics_marks = +prompt("Enter Your Physics Marks");
var chemistry_marks = +prompt("Enter Your Chemistry Marks");

var total_marks = 400;

var obtained_marks = math_marks + urdu_marks + physics_marks + chemistry_marks;

var percentage = (obtained_marks / total_marks) * 100;

console.log("You Got " + percentage + "%");
