/*
let mathquizmain = new Image();
//mathquizmain.src = "C:\Users\calum\Desktop\Portfolio\MathQuizMain.png";
mathquizmain.src = "MathQuizMain.jpg";
let mathquizcorrect;
let mathquizincorrect;
let mathquizresults;
let mathquiz5;
//let mathquiz = new array(5);
//A canvas is what a image can be drawn or placed on JavaScript. To draw however, you
//need a context so the program knows what kind of object is being drawn.
*/
let pikachu = new Image();
pikachu.src = "https://i.pinimg.com/originals/e5/1d/4f/e51d4f7b1f0ca6e2383c47c628247196.jpg";

let pikacanvas = document.getElementById("homecanvas");
let pikachucontext = pikacanvas.getContext('2d');

pikacanvas.width = "720";
pikacanvas.height = "456";

window.onload=function(){
  pikachucontext.drawImage(pikachu,0,0,720,456);
  //when saying .onload, you are basically setting someone when the onload functions happens.
};
//onload();
if(btnScrolltoTop){
  btnScrolltoTop.addEventListener("click", function(){
    window.scrollTo(0,0);
  });
}

