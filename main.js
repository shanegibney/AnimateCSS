// (function() {
var arrIn = [
  "bounce", "flash", "pulse", "rubberBand", "shake", "headShake",
  "swing",
  "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig",
  "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "hinge", "jackInTheBox", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp"
];
var arrOut = ["slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "lightSpeedOut", "rotateOutUpRight", "flipOutX", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "flipOutY", "rollOut"];
var thing = document.getElementById("main");
var rand = Math.floor((Math.random() * arrIn.length) + 1);
var currentClass = '';
currentClass = arrIn[rand];
// currentClass = "textRed";
thing.className = "text animated " + currentClass;
thing.innerHTML += 'GLENALBYN MASTERS';
//every 5 secs a new animation occurs
//needs duration loop to run every five seconds and remove classes and replace with a random class.
setInterval(function() {
  // method to be executed;
  console.log("I output a random number every 5 secs: " + Math.floor((Math.random() * arrIn.length) + 1));
  rand = Math.floor((Math.random() * arrIn.length) + 1);
  currentClass = arrIn[rand];
  console.log("currentClass = " + currentClass);
  thing.classList.remove(currentClass);
  thing.className = "text animated " + currentClass;
}, 5000);
// })();