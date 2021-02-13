let canvas = document.getElementById("mainCanvas");

//create model object
let model = new Model(canvas.width*0.05,canvas.height*0.6, canvas.width*0.85);

//create view object
let view = new View(canvas ,model.getPlayer(), new Boy(canvas) , "level1");

//create controller object
let controller = new Controller(model);

//create game object 
let game = new Game(model, view);
var mute= document.getElementById("mute")
var isMuted =true;
mute.addEventListener("click",playOrMute)

var  audio= new Audio(`../audio/01_AlbyEtmannah.mp3`);

audio.addEventListener("ended",function (){
        audio.currentTime = 0;
        audio.play();
    }

)

function playOrMute()
{
    if (isMuted)
    {
        mute.src="../images/game/unmute.png"
    audio.play();
    isMuted =false
    }
    else {
        mute.src="../images/game/mute.png"

        isMuted = true;
      audio.pause();
    }
}