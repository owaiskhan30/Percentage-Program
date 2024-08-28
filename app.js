var math_marks = +prompt("Enter Your Math Marks");
var urdu_marks = +prompt("Enter Your Urdu Marks");
var physics_marks = +prompt("Enter Your Physics Marks");
var chemistry_marks = +prompt("Enter Your Chemistry Marks");

var total_marks = 400;

var obtained_marks = math_marks + urdu_marks + physics_marks + chemistry_marks;

var percentage = (obtained_marks / total_marks) * 100;

console.log(math_marks);
console.log(urdu_marks);
console.log(physics_marks);
console.log(chemistry_marks);

if (math_marks >= 25 || urdu_marks >= 25 || physics_marks >= 25 || chemistry_marks >= 25) {
    console.log("Congratulation You scored" + " " + obtained_marks + "out of" + " " + total_marks + " " + "marks.");
    console.log("You Got " + percentage + "%");
} else {
    console.log("You Fail");
}




