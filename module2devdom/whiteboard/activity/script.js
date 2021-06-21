let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100;
});

// canvas drawing gets erased on window resize ???

// a context object which provides fun for 2d drawing
let ctx = canvas.getContext("2d");

let ispendown=false;
canvas.addEventListener("mousedown",function(e){
    let xcord=e.clientX;
    let ycord= e.clientY-100;
    ctx.beginPath();
    ctx.moveTo(xcord,ycord);
    ispendown=true;
})
canvas.addEventListener("mousemove",function(e){
if(ispendown){
    let xcord=e.clientX;
    let ycord= e.clientY-100;
    console.log(xcord,ycord);
    ctx.lineTo(xcord,ycord);
    ctx.stroke();
}
})
canvas.addEventListener("mouseup",function(e){
ispendown=false;
})