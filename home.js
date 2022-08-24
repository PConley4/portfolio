let mathquizmain = new Image();
mathquizmain.src = "C:\Users\calum\Desktop\Portfolio\MathQuiz Main.png";
let mathquizcorrect;
let mathquizincorrect;
let mathquizresults;
let mathquiz5;
let mathquiz = new array(5);
//A canvas is what a image can be drawen or placed on JavaScript. To draw however, you
//need a context so the program knows what kind of object is being drawn.
let mathcanvas = document.getElementById('mycanvas');
let mathctx = mathcanvas.getContext('2d');
window.onload= function(){
  mathctx.drawImage(mathquizmain, 0, 0);
}
onload();

