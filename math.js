
let equationcanvas = document.getElementById("equation");
let equationcontext = equationcanvas.getContext('2d');

equationcontext.width = "400";
equationcontext.length = "400";

equationcontext.moveTo(0,0);
equationcontext.lineTo(200,100);
equationcontext.stroke();
/*
let equation = new Image();
equation.src = "MathQuizMain.png";

let equationcanvas = document.getElementById("equation");
let equationcontext = equationcanvas.getContext('2d');

equationcontext.pikacanvas.width = "300";
equationcontext.pikacanvas.height = "500";

window.onload=function(){
  equationcontext.drawImage(equation,0,0,100,100);
  //when saying .onload, you are basically setting someone when the onload functions happens.
};
//onload();
*/

if(btnScrolltoTop){
  btnScrolltoTop.addEventListener("click", function(){
    window.scrollTo(0,0);
  });
}
//make a method from this that can be used in multiple pages