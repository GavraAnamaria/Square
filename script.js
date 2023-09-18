
let p1 = document.getElementById("p1")
let moved = false;
p1.onclick=function (){
  if(!moved){
    p1.style.translate = "0vw"
    p1.style.rotate="0deg"
    p1.style.backgroundColor = "darkblue"
  }else {
    p1.style.translate = "90vw"
    p1.style.rotate="50deg"
    p1.style.backgroundColor = "blue"
  }
  p1.style.transition="translate 1s"
  moved=!moved
}


let p2 = document.getElementById("p2")
p2.onclick=function (){
  p2.style.transition="translate 1s"
    p2.style.translate = "90vw"
  p2.style.backgroundColor = "blueviolet"
  p2.style.borderRadius = "50%"

  setTimeout(function () {
    p2.style.translate = "0vw"
    p2.style.backgroundColor = "blue"
    p2.style.borderRadius = "0%"
  }, 2000);
}

let p3 = document.getElementById("p3")
p3.onclick= async function () {
  p3.style.transition = "all 1s"
  p3.style.translate = "0 300px"
  p3.style.opacity="0.5"
  await  translate1("90vw", "300px",0.5);
  await translate1("90vw", "0px", 1);
  await translate1("0vw", "0px",1);

}
const translate1 = (x, y, o)=> {
  return new Promise((resolve)=>setTimeout(function () {
    resolve(p3.style.translate=x+" "+y, p3.style.opacity=o);
  }, 2000));
}
