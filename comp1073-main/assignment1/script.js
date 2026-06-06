//🚀

var whoIndex=0;

//Word Array

var whoWord = [
    "A fearless astronaut",
    "A rookie space cadet",
    "A mysterious alien",
    "The captain of a starship",
    "A lone space ranger",
    "An android explorer",
    "A rebel pilot",
    "A young cosmonaut"
];

//What Array
var whatWords = [
  "discovered a hidden galaxy",
  "intercepted a strange signal",
  "repaired a broken warp drive",
  "escaped a black hole",
  "decoded an alien map",
  "launched into hyperspace",
  "landed on an uncharted moon",
  "outsmarted a rival crew"
];

// Where Array
var whereWords = [
  "on the dark side of Mars",
  "inside a drifting space station",
  "near the rings of Saturn",
  "on a frozen alien planet",
  "deep inside a nebula",
  "aboard a cloaked spacecraft",
  "at the edge of the solar system",
  "inside an abandoned asteroid base"
];

//How Array
var howWords = [
  "and made it back alive.",
  "and changed the course of history.",
  "without any backup.",
  "and earned the galaxy's respect.",
  "before anyone else even knew the danger.",
  "and left a message for the next explorer.",
  "with only seconds to spare.",
  "and the mission logs told the whole story."
];

//who function
function cycleWho(){
    whoIndex= whoIndex + 1;
    if(whoIndex=>whoWord.lenght){
        whoIndex=0;
    }

    document.getElementsById("btn-who").textContent=whoWords[whoIndex];
}

<button id="btn-who" onclick="cycleWho()">A fearless astronaut</button>