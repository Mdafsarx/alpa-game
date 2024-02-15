
const PlayNow=()=>{

    document.getElementById('Home').classList.add('hidden');
document.getElementById('playground').classList.remove('hidden');

continueGame();

}

function newPlay(){

removeElementById('end');
showElementById('playground')
setTextValue('score',0);
setTextValue('life',5)

}
