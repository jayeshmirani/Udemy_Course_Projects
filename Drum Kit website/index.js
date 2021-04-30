btns=document.querySelectorAll(".drum")

for(var i=0;i<btns.length;i++)
{
  btns[i].addEventListener("click", function () {
                                                var btn_char= this.innerHTML;
                                                makeSound(btn_char);
                                                buttonAnimation(btn_char);
                                                }
                          );
}

document.addEventListener("keydown", function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    // default:

  }
}

function buttonAnimation(key)
{
    //to keep the pressed button pressed until another is pressed
    // press=document.getElementsByClassName("pressed");
    // if(press.length)
    // {
    //     press[0].classList.remove("pressed");
    // }
    curr_btn=document.querySelector("."+key);
    curr_btn.classList.add("pressed");
    setTimeout(function() {
                          curr_btn.classList.remove("pressed");
                          }, 100);
}
