var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

/*$("document").on("keypress",function(){
    if(!started){
        $("h1").text("level "+level);
    nextSequence();
    started = true;
    }
   })*/
    $(document).keypress(function() {
        if (!started) {
          $("#level-title").text("Level " + level);
          nextSequence();
          started = true;
        }
      });


/*$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

     })*/
    $(".btn").click(function() {

        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
      
        playsound(userChosenColour);
        animatePress(userChosenColour);
      
        checkAnswer(userClickedPattern.length-1);
      });



   function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }
     else {

      console.log("wrong");

      playsound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}


 function nextSequence(){
userClickedPattern = [];

    level++;
    $("h1").text("level "+level);
    randomNumber = Math.floor(Math.random()*4);

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
 };

function playsound(name){
    var audio = new Audio("./sounds/"+ name +".mp3")
    audio.play();
}
 
function animatePress(currentColour){
 $("#"+currentColour).addClass("pressed");

 setTimeout(function(){
$("#"+currentColour).removeClass("pressed")},100)

};


 function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
 }

















































