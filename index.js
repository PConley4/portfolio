let pikachu = new Image();
pikachu.src = "EtHLobQUUAwM6ju.jpg";

let pikacanvas = document.getElementById("indexcanvas");
let pikachucontext = pikacanvas.getContext('2d');

pikacanvas.width = "720";
pikacanvas.height = "456";

window.onload=function(){
  pikachucontext.drawImage(pikachu,0,0,720,456);
  //when saying .onload, you are basically setting someone when the onload functions happens.
};
//onload();
  btnScrolltoTop.addEventListener("click", function(){
    window.scrollTo(0,0);
  });

