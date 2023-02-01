const playbutton = document.getElementById ('playbutton');
const firstDivs = document.getElementById('first-div');
const mains = document.getElementsByClassName('main')[0];

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;



function generateButtons (letter) {
    const btn = document.createElement("button");
    btn.innerText = letter;
    btn.addEventListener ('click', () => {
        btn.disabled =true
    })
    firstDivs.appendChild(btn);
}
function displayButtons () {
    alphabet.split('').forEach((letter) => {
        generateButtons(letter)
    })
}


function play () {
    mains.style.display = 'flex';
    playbutton.style.display = 'none';
    generateButtons();
    displayButtons();
}





playbutton.addEventListener ('click',play);

