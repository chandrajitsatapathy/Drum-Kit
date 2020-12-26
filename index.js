// alert("ho");
for(var i=0;i<=6;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClicked);
    //document.querySelectorAll(".drum")[i].addEventListener("click", white1());
  //  audio.play;

}//click
function handleClicked(){
   // alert("Clicked");

 // this.style.color = "white";
var buttonInnerHtml= this.innerHTML;
makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}//keyboard
document.addEventListener("keydown", function (event) {
 // console.log(event);
makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');

      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

   // default: ;

  } 



};
function buttonAnimation(currentKey){
var activeButton= document.querySelector("."+ currentKey);
  //document.querySelector(".drum").classList.add("pressed");
  activeButton.classList.add("pressed");
  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100)
}