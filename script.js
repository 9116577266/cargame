let blucar = document.getElementById("bluecar");
let racecar = document.getElementById("racecar");
let result = document.getElementById("result");
const score = document.getElementById("score");
let game  = document.getElementById("game");
let counter = 0;

// blue car move

blucar.addEventListener("animationiteration", function(){

    var rendom = ((Math.floor(Math.random()*3))*130)
   blucar.style.left = rendom + "px";
   counter++;
})

// race car move

 window.addEventListener("keydown", function(e){
  if(e.keyCode == "39"){  let racecarleft = this.parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
   if(racecarleft<260) { racecar.style.left =( racecarleft + 130) + "px";}};

if(e.keyCode == "37"){
      let racecarleft = this.parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
   if(racecarleft >0) { racecar.style.left =( racecarleft - 130) + "px"}};

})



 
 //Game over
 setInterval(function Gameover (){
     var blueCarTop = parseInt(window.getComputedStyle(blucar).getPropertyValue("top"))
     var blueCarLeft = parseInt(window.getComputedStyle(blucar).getPropertyValue("left"));
     var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
         if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
             result.style.display = "block";
             game.style.display = "none";
             score.innerHTML = `score: ${counter} `;
 
             counter = 0;
         }
 }, 10)
 
