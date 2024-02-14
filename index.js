// function PlayNow(){

// const home=document.getElementById('Home');
// home.classList.add('hidden');

// const playGround=document.getElementById('playground');
// playGround.classList.remove('hidden')

// }

function continueGame(){

const ans=getRandomAlphabet()
document.getElementById('ALPHABETDisplay').innerText=ans;
addBackgroundById(ans)

}



function PlayNow(){

hideElementById('Home');
showElementById('playground');
continueGame()

}