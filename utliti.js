

function continueGame(){

const alphabet= getRandomAlphaBet();
document.getElementById('ALPHABETDisplay').innerText=alphabet;

setBackgroundColor(alphabet);



}
function getRandomAlphaBet(){

    let alphabet='abcdefghijklmnopqrstuvwxyz';
    alphabet=alphabet.split('');


    const Random=Math.round(Math.random()*25);
    const RandomAlp=alphabet[Random];
    return RandomAlp;


}

const setBackgroundColor=(id)=>{

    document.getElementById(id).classList.add('bg-amber-500');
}



//////

function removeBgColor(id){
    document.getElementById(id).classList.remove('bg-amber-500')
}

document.addEventListener('keyup',(e)=>{



    const playerPress=e.key;
    if(playerPress==='Escape'){
        playAgain()
    }
    let alphabet=document.getElementById('ALPHABETDisplay').innerText;
alphabet=alphabet.toLowerCase()

    if(playerPress===alphabet){
        // run game
       continueGame()
removeBgColor(playerPress);
// update score
const score=getTextValueById('score');
const newScore=score+1;
setTextValue('score',newScore)

// ///////////// without function
// const scoreText=document.getElementById('score').innerText;
// const score=parseInt(scoreText); 
// const newScore=score+1;
// document.getElementById('score').innerText=newScore;
// ////////////////////


    }
    else{
// decrement score
const life=getTextValueById('life');
const newLife=life-1;
setTextValue('life',newLife)

if(newLife===0){
playAgain()


}


// //////////////////// without function//////
// const lifeText=document.getElementById('life');
// const lifeValue=lifeText.innerText;
// const life=parseInt(lifeValue);
// const newLife=life-1;
// lifeText.innerText=newLife;
/////////////////////////////////////////

    }

})


function getTextValueById(id){

    const text=document.getElementById(id).innerText;
    const textValue=parseInt(text);
    return textValue;


}
function setTextValue(elementId,value){

const element=document.getElementById(elementId);
element.innerText=value;


}














function playAgain(){

 removeElementById('playground');
showElementById('end')
const lastScore=getTextValueById('score');
setTextValue('finalScore',lastScore);

}









function showElementById(id){
    document.getElementById(id).classList.remove('hidden')
}



function removeElementById(id){
    document.getElementById(id).classList.add('hidden')
}