const playbutton = document.getElementById ('playbutton');
const firstDivs = document.getElementById('first-div');
const mains = document.getElementsByClassName('main')[0];
const RandomName = document.getElementById('Random-name');
const randomArr = ['white', 'nike', 'kvara', 'Popcorn'];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let gueessTheWord = '';
let hiddenWord = '';




function generateButtons (letter) {
    const btn = document.createElement("button");
    btn.innerText = letter;
    btn.addEventListener ('click', () => {
        btn.disabled =true
        btn.style.backgroundColor = 'red';
        btn.style.opacity = '50%';
    })
    firstDivs.appendChild(btn);
}
function displayButtons () {
    alphabet.split('').forEach((letter) => {
        generateButtons(letter)
    })
}
function showRandomWord () {
    gueessTheWord = randomArr[Math.floor(Math.random() * randomArr.length)];
    for ( let letter of gueessTheWord){
        hiddenWord += '-';
    }
    RandomName.innerText = hiddenWord;

}


function play () {
    mains.style.display = 'flex';
    playbutton.style.display = 'none'; 
    generateButtons();
    displayButtons();
    showRandomWord();
    
}





playbutton.addEventListener ('click',play);

