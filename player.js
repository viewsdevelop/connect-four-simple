//clickBoard function

function clickBox(){ 
    let squares =document.querySelectorAll(".board div") 
    let click =parseInt(this.dataset.id) 
    if( squares[click+7].classList.contains("taken") && !squares[click].classList.contains("taken")){ 
    if(currentPlayer===1){ 
    currentPlayer=2 
    player.innerHTML=currentPlayer
    this.className="player-one taken" 
    checkWon() 
    }else if(currentPlayer===2){ 
    currentPlayer=1 
    player.innerHTML=currentPlayer 
    this.className="player-two taken" 
    checkWon() 
    } 
    if(box===42){ 
    setTimeout(()=>alert("boxes filled"),300)
    setTimeout(()=>restart.style.display="flex",500) 
    } 
    }else{
    alert("You cannot build on an empty space or on a space that has been built on")
    } 
}