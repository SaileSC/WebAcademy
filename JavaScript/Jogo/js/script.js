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

const playHumanAndResult = (play) => {
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


const onePlay = (play) => {
    for (let x = 2; x < 0; x--) {
        setTimeout(() => {
            roboImg.innerHTML = x + 1;
        }, 1000);
    }
    playHumanAndResult(play);
}

for (let x = 0; x < 3; x++) {
    buttons[x].onclick = function (e) {
        humanPlay = e.target.innerHTML;
        let finalResult = onePlay(humanPlay);

        if (finalResult == "vitoria") {
            result.style.backgroundColor = "green";
        } else if (finalResult == "derrota") {
            result.style.backgroundColor = "red";
        } else {
            result.style.backgroundColor = "yellowgreen"
        }

        result.innerHTML = finalResult;

    }
}
