const playbutton = document.getElementById ('playbutton');
const firstDiv = document.getElementById('first-div');
const mains = document.getElementsByClassName('main')[0];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function generateButtons (letter){
    const btn = document.createElement("button");
    btn.id = letter;
    btn.innerText = letter;
    firstDiv.appendchild(btn);
}
function displayButtons () {
    alphabet.split('').forEach((letter) => {
        generateButtons (letter)
    })


}


function play () {
    mains.style.display = 'flex';
    generateButtons();
    displayButtons();
}





playbutton.addEventListener ('click',play)