var numberOfDrums = document.querySelectorAll(".drum").length;

// mouse press
for (var i = 0; i < numberOfDrums; i++ ){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var drumName = this.textContent;

    makeSound(drumName);

    buttonAnimation(drumName);

  });
}

// function if using keyboard
document.addEventListener("keypress", function(event){

  // event.key return what cuse the event to occur as a string
  var drumName = event.key;

  makeSound(drumName);

  buttonAnimation(drumName);

});

// function to play sound
function makeSound(drumName){

  switch (drumName){
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;


    default: console.log(key);
  }
}


// function for adding button animation
function buttonAnimation(drumName){

  var obj = document.querySelector("." + drumName);

  obj.classList.add("pressed");

  setTimeout( function(){
    obj.classList.remove("pressed");
  }, 100);
}
