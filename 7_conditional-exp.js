const prompt = require("prompt-sync")();
let a = prompt("enter your age");
a = Number.parseInt(a);

if (a < 0) {
  // alert("This is invalid age");
  console.log("This is invalid age");
} else if (a > 0 && a <= 12) {
  // alert("You are a kid and you cannot even think of driving");
  console.log("You are a kid and you cannot even think of driving ");
} else if (a > 12 && a < 18) {
  // alert("You are a kid and you can think of driving after you have turned 18");
  console.log(
    "You are a kid and you can think of driving after you have turned 18"
  );
} //alert("You can now drive");
else console.log("now you can drive");

// console.log(a);
