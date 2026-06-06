//🚀

let whoIndex=0;
let whatIndex=0;
let whereIndex=0;
let whenIndex=0;
let howIndex=0;

//Word Array

let whoWords = [
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
let whatWords = [
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
let whereWords = [
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
let whenWords = [
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
let howWords = [
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
    if (whoIndex >= whoWords.length) {
        whoIndex = 0;
    }
    document.getElementById("btn-who").textContent = whoWords[whoIndex];
}

<button id="btn-who" onclick="cycleWho()">A fearless astronaut</button>


 //what function
function cycleWhat() {
    whatIndex = whatIndex + 1;
    if (whatIndex >= whatWords.length) {
        whatIndex = 0;
    }
    document.getElementById("btn-what").textContent = whatWords[whatIndex];
}

<button id="btn-what" onclick="cycleWhat()">discovered a hidden galaxy</button>


//where function
function cycleWhere() {
    whereIndex = whereIndex + 1;
    if (whereIndex >= whereWords.length) {
        whereIndex = 0;
    }
    document.getElementById("btn-where").textContent = whereWords[whereIndex];
}

<button id="btn-where" onclick="cycleWhere()">on the dark side of Mars</button>

//when function
function cycleWhen() {
    whenIndex = whenIndex + 1;
    if (whenIndex >= whenWords.length) {
        whenIndex = 0;
    }
    document.getElementById("btn-when").textContent = whenWords[whenIndex];
}

<button id="btn-when" onclick="cycleWhen()">during a meteor shower</button>

//how function
function cycleHow() {
    howIndex = howIndex + 1;
    if (howIndex >= howWords.length) {
        howIndex = 0;
    }
    document.getElementById("btn-how").textContent = howWords[howIndex];
}

<button id="btn-how" onclick="cycleHow()">and made it back alive.</button>