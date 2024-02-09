const botoes = document.getElementsByTagName("button");
const toggle = document.getElementById("toggle");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function (e) {
        toggle.style.display = e.target.innerHTML;
    }
}