const roboText = document.getElementById("roboText");
const roboImg = document.getElementById("roboImg");
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("resultado");


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
        return "vitoria";
    } else if (play == "Papel" && playMac == "Pedra") {
        return "vitoria";
    } else if (play == "Tesoura" && playMac == "Papel") {
        return "vitoria";
    } else {
        return "derrota";
    }
}

const cleanRobo = () =>{
    result.innerHTML = "O robo vai jogar...";
    roboText.innerHTML = "jogando...";
    result.style.backgroundColor = "grey"
    roboImg.style.backgroundImage = "";
}

for (let x = 0; x < 3; x++) {
    buttons[x].onclick = function (e) {
        humanPlay = e.target.innerHTML;
        cleanRobo();
        let timeSecRoboPlay = 2;
        setTimeout(() => {
            let finalResult = resultPlay(humanPlay);
            if (finalResult == "vitoria") {
                result.style.backgroundColor = "green";
            } else if (finalResult == "derrota") {
                result.style.backgroundColor = "red";
            } else {
                result.style.backgroundColor = "yellowgreen"
            }

            result.innerHTML = finalResult;
        }, timeSecRoboPlay * 1000);
    }
}
