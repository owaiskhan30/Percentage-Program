var math_marks = +prompt("Enter Your Math Marks");
var urdu_marks = +prompt("Enter Your Urdu Marks");
var physics_marks = +prompt("Enter Your Physics Marks");
var chemistry_marks = +prompt("Enter Your Chemistry Marks");

var total_marks = 400;
var obtained_marks = math_marks + urdu_marks + physics_marks + chemistry_marks;
var percentage = (obtained_marks / total_marks) * 100;

console.log("Math Marks" + " " + math_marks);
console.log("Urdu Marks" + " " + urdu_marks);
console.log("Physics Marks" + " " + physics_marks);
console.log("Chemistry Marks" + " " + chemistry_marks);

if (math_marks >= 25 || urdu_marks >= 25 || physics_marks >= 25 || chemistry_marks >= 25) {
    console.log("Result Congratulation You scored" + " " + obtained_marks + " " + "out of" + " " + total_marks + " " + "marks.");
    console.log("Percentage You Got " + percentage + "%");
} else {
    console.log("Result You Fail");
};

if (percentage == 100 || percentage >= 90) {
  console.log("Your Grade Is (A+)");
} else if (percentage >= 80 || percentage >= 70) {
  console.log("Your Grade Is (A)");
} else if (percentage >= 60 || percentage >= 50) {
  console.log("Your Grade Is (B)");
} else if (percentage >= 40 || percentage >= 25) {
  console.log("Your Grade Is (C)");
} else{
    console.log("Your Grade Is (F)");
}