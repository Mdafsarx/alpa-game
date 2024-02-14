const hideElementById=(elementId)=>{

    const element=document.getElementById(elementId);
    element.classList.add('hidden');


}

function showElementById(elementId){

const element=document.getElementById(elementId);
element.classList.remove('hidden')

};


function getRandomAlphabet(){

    let alphabet="abcdefghijklmnopqrstuvwxyz";
    alphabet=alphabet.split('');

    const Random=Math.round(Math.random()*25);
    const RandomAlp=alphabet[Random];
return RandomAlp;

}

function addBackgroundById(Id){

const keyboard=document.getElementById(Id);
keyboard.style.background='blue'

}