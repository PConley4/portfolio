let index = new Image();
index.src = "InventoryHome.png";

let ientry = new Image();
ientry.src = "InventoryEntry.png";
let isearch = new Image();
isearch.src = "InventorySearch.png";
let ireport = new Image();
ireport.src = "InventoryReport.png";

let fentry = new Image();
fentry.src = "FrequenterEntry.png";
let fsearch = new Image();
fsearch.src = "FrequenterSearch.png";
let freport = new Image();
freport.src = "FrequenterReport.png";

let dentry = new Image();
dentry.src = "DistributionEntry.png";
let dsearch = new Image();
dsearch.src = "DistributionSearch.png";
let dreport = new Image();
dreport.src = "DistributionReport.png";

let indexcanvas = document.getElementById("home");
let indexcontext = indexcanvas.getContext('2d');

let ientrycanvas = document.getElementById("ientry");
let ientrycontext = ientrycanvas.getContext('2d');
let isearchcanvas = document.getElementById("isearch");
let isearchcontext = isearchcanvas.getContext('2d');
let ireportcanvas = document.getElementById("ireport");
let ireportcontext = ireportcanvas.getContext('2d');

let fentrycanvas = document.getElementById("fentry");
let fentrycontext = fentrycanvas.getContext('2d');
let fsearchcanvas = document.getElementById("fsearch");
let fsearchcontext = fsearchcanvas.getContext('2d');
let freportcanvas = document.getElementById("freport");
let freportcontext = freportcanvas.getContext('2d');

let dentrycanvas = document.getElementById("dentry");
let dentrycontext = dentrycanvas.getContext('2d');
let dsearchcanvas = document.getElementById("dsearch");
let dsearchcontext = dsearchcanvas.getContext('2d');
let dreportcanvas = document.getElementById("dreport");
let dreportcontext = dreportcanvas.getContext('2d');

indexcanvas.width = "775";
indexcanvas.length = "275";

ientrycanvas.width = "775";
ientrycanvas.length = "275";
isearchcanvas.width = "775";
isearchcanvas.length = "275";
ireportcanvas.width = "775"
ireportcanvas.length = "275";

fentrycanvas.width = "775";
fentrycanvas.length = "275";
fsearchcanvas.width = "775";
fsearchcanvas.length = "275";
freportcanvas.width = "775"
freportcanvas.length = "275";

dentrycanvas.width = "775";
dentrycanvas.length = "275";
dsearchcanvas.width = "775";
dsearchcanvas.length = "275";
dreportcanvas.width = "775"
dreportcanvas.length = "275";

//displaying images in Js is both a more modern and less restrictive method.
window.onload=function(){
  indexcontext.drawImage(index,0,0,775,275);
  //when saying .onload, you are basically setting someone when the onload functions happens.
  ientrycontext.drawImage(ientry,0,0,775,275);
  isearchcontext.drawImage(isearch,0,0,775,275);
  ireportcontext.drawImage(ireport,0,0,775,275);

  fentrycontext.drawImage(fentry,0,0,775,275);
  fsearchcontext.drawImage(fsearch,0,0,775,275);
  freportcontext.drawImage(freport,0,0,775,275);

  dentrycontext.drawImage(dentry,0,0,775,275);
  dsearchcontext.drawImage(dsearch,0,0,775,275);
  dreportcontext.drawImage(dreport,0,0,775,275);
};
//I decided to include this button as a way to implement js, make a function, and give the user a easy way to get to the home banner.
  btnScrolltoTop.addEventListener("click", function(){
    window.scrollTo(0,0);
  });
