


//add an event listener to every single button.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

            var buttonHTML = this.innerHTML;

            makeSound(buttonHTML);
            buttonAnimation(buttonHTML);

});

}

//function that takes a character and checks it against the switch statement then plays an audio
document.addEventListener("keydown", function(event){makeSound(event.key)
buttonAnimation(event.key);

});

function makeSound(key){
  switch(key){
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case"a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case"s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case"d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case"j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case"k":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case"l":
    var kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();

    break;
    default:
    console.log(buttonHTML);


  }


}





function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  //add class to element using JS
  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");
  },100);

}
