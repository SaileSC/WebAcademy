const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const displayedImg = (event) => {
    const srcValue = event.target.getAttribute("src");
    displayedImage.setAttribute("src", srcValue);
};


for(let x = 1; x <= 5 ; x++){
    const newImage = document.createElement('img');
    newImage.setAttribute("src", `images/hollow${x}.jpg`);
    newImage.setAttribute("alt", `pic${x}.jpg`);
    newImage.addEventListener("click", displayedImg)
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

const changeClass = () =>{
    if(btn.getAttribute("class") == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}



btn.addEventListener("click", changeClass);