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

//When Array
var whenWords = [
  "during a meteor shower",
  "just before the sun went supernova",
  "in the dead of deep space night",
  "when all communications went dark",
  "as the mission clock hit zero",
  "moments before re-entry",
  "while orbiting at full speed",
  "after three years in cryosleep"
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
function cycleWho() {
    whoIndex = whoIndex + 1;
    if (whoIndex >= whoWord.length) {
        whoIndex = 0;
    }
    document.getElementById("btn-who").textContent = whoWord[whoIndex];
}

<button id="btn-who" onclick="cycleWho()">A fearless astronaut</button>

<button id="btn-who" onclick="cycleWho()">A rookie space cadet</button>

<button id="btn-who" onclick="cycleWho()">A mysterious alien</button>

<button id="btn-who" onclick="cycleWho()">The captain of a starship</button>

<button id="btn-who" onclick="cycleWho()">A lone space ranger</button>

<button id="btn-who" onclick="cycleWho()">An android explorer</button>

<button id="btn-who" onclick="cycleWho()">A rebel pilot</button>

<button id="btn-who" onclick="cycleWho()">A young cosmonaut</button>

 