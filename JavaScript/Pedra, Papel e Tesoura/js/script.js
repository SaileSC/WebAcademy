const roboText = document.getElementById("roboText");
const roboImg = document.getElementById("roboImg");
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("resultado");
const humanPlayText = document.getElementById("humanText");
const countPtsRobo = document.getElementById("ptsRobo");
const countPtsRHuman = document.getElementById("ptsHuman");
const countRoundsText = document.getElementById("rounds");


const playMachine = () => {
    let array = ["Pedra", "Papel", "Tesoura"];
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    return randomElement;
}

const resultPlay = (play) => {
    let playMac = playMachine();
    roboText.innerHTML = playMac;
    roboImg.style.backgroundImage = `url(img/${playMac}.jpg)`;

    if (play == playMac) {
        return "empate";
    } else if (play == "Pedra" && playMac == "Tesoura") {
        return "vitória";
    } else if (play == "Papel" && playMac == "Pedra") {
        return "vitória";
    } else if (play == "Tesoura" && playMac == "Papel") {
        return "vitória";
    } else {
        return "derrota";
    }
}

const cleanRobo = () =>{
    result.innerHTML = "O rôbo vai jogar...";
    roboText.innerHTML = "jogando...";
    result.style.backgroundColor = "grey"
    roboImg.style.backgroundImage = "";
}


const buttonsState = (buttons, status)=>{
    for(let x = 0; x < buttons.length;x++){
        buttons[x].disabled  = !status;
    }
}


let ptsHuman = 0;
let ptsRobo = 0;
let countRounds = 0;

for (let x = 0; x < 3; x++) {
    

    buttons[x].onclick = function (e) {
        buttonsState(buttons, false);
        let humanPlay = e.target.value;
        humanPlayText.innerHTML = humanPlay;
        e.target.classList.add("selected");
        cleanRobo();

        let timeSecRoboPlay = 1;
        setTimeout(() => {
            let finalResult = resultPlay(humanPlay);
            countRounds += 1;

            if (finalResult == "vitória") {
                result.style.backgroundColor = "green";
                ptsHuman += 1;
            } else if (finalResult == "derrota") {
                result.style.backgroundColor = "red";
                ptsRobo += 1;
            } else {
                result.style.backgroundColor = "yellowgreen"
            }

            e.target.classList.remove("selected");
            result.innerHTML = finalResult;

            countRoundsText.innerHTML = countRounds;
            countPtsRHuman.innerHTML = ptsHuman;
            countPtsRobo.innerHTML = ptsRobo;
            buttonsState(buttons, true);
        }, timeSecRoboPlay * 1000);
    }
}
