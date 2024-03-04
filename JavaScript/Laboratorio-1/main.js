//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 
"Com uma pontuação incrível de 500.000 pontos no jogo, :insertx: decidiu embarcar em uma missão épica." + 
" Ao entrar no mundo de :inserty:, o personagem se deparou com uma paisagem virtual deslumbrante apesar disso estava fazendo 94 graus Fahrenheit. De repente, um boss gigantesco pesando mais de 300 libras " +
"apareceu, mas :insertz: não se intimidou. Com um movimento hábil do controle, :insertz: usou uma habilidade única e derrotou o inimigo." +
"Com isso Saile desligou o video-game e foi dormir.";


const insertX = [
    "Stealthblade, o Assassino da Realidade Virtual",
    "Ironclad Behemoth", 
    "Nexus Seraph"
];

const insertY = [
    "a cidade cyberpunk futurista", 
    "a masmorra enigmática cheia de enigmas",
    "a plataforma flutuante no espaço sideral"
];


const insertZ = [
    "desencadeou uma sequência imparável de combos",
    "obteve um item lendário que concedeu poderes extraordinários",
    "desbloqueou um portal para uma dimensão paralela"
];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory =  newStory.replace(":insertx:", xItem)
                        .replace(":inserty:", yItem)
                        .replace(":insertz:", zItem)
                        .replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Saile", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = 300 * 0.0714286;
    const temperature =  (94 - 32) / 1.8 ;

    newStory =  newStory.replace("300 libras", weight.toFixed(2) + " pedras")
                        .replace("94 graus Fahrenheit", temperature.toFixed(2) + " graus centigrados");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}