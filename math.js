let equation = new Image();
equation.src = "MathQuizMain.png";
let correct = new Image();
correct.src = "MathQuizCorrect.png";
let incorrect = new Image();
incorrect.src = "MathQuizIncorrect.png";
let results = new Image();
results.src = "MathQuizResults.png";

let equationcanvas = document.getElementById("equation");
let equationcontext = equationcanvas.getContext('2d');
let correctcanvas = document.getElementById("correct");
let correctcontext = correctcanvas.getContext('2d');
let incorrectcanvas = document.getElementById("incorrect");
let incorrectcontext = incorrectcanvas.getContext('2d');
let resultscanvas = document.getElementById("results");
let resultscontext = resultscanvas.getContext('2d');

equationcanvas.width = "200";
equationcanvas.length = "400";
correctcanvas.width = "200";
correctcanvas.length = "400";
incorrectcanvas.width = "200";
incorrectcanvas.length = "400";
resultscanvas.width = "200";
resultscanvas.length = "400";

//displaying images in Js is both a more modern and less restrictive method.
window.onload=function(){
  equationcontext.drawImage(equation,0,0,200,400);
  //when saying .onload, you are basically setting someone when the onload functions happens.
  correctcontext.drawImage(correct,0,0,200,400);
  incorrectcontext.drawImage(incorrect,0,0,200,400);
  resultscontext.drawImage(results,0,0,200,400);
};
//I decided to include this button as a way to implement js, make a function, and give the user a easy way to get to the home banner.
  btnScrolltoTop.addEventListener("click", function(){
    window.scrollTo(0,0);
  });
