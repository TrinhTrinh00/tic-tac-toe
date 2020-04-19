let playerId = 0;
let isGameOver = false;

const containerElem = document.getElementById("container");
const handleContainerClick = function(e){
    if(isGameOver){
        return;
    }

    const cellElem = e.target;
    const dataCell = e.target.attributes[1];//e.target["data-cell"]
    const isLegalMove = checkLegalMove(cellElem);

    if(isLegalMove){
        const revisedPlayerSymbol = getPlayerSymbol(cellElem);
        cellElem.innerText = revisedPlayerSymbol;

        const revisedPlayerId = incrementPlayer(playerId);
        playerId = revisedPlayerId;
        
        const isWinner = checkWinner();
        const isDraw = checkDraw();

       if (isWinner){
           showWinner();
           isGameOver = true;
       }
       else if(isDraw){
           showDraw();
           isGameOver = true;
       }
       else{
        updateDisplay(playerId);
       }
    } 
}

const updateDisplay = function(givenPlayerId){
    const playerTurnElem = document.getElementById("playerTurn");
    const revisedCellValue = getPlayerSymbol(givenPlayerId);
    playerTurnElem.innerText = revisedCellValue + "'s Turn";
}

const getPlayerSymbol = function(givenPlayerId){
    if(playerId === 0){
        return "X";
    }
    return "O";
}

const incrementPlayer = function(givenPlayerId){
    if(givenPlayerId === 0){
        return 1;
    }

    return 0;
}

const checkLegalMove = function(givenCellElem){
    const currentValue = givenCellElem.innerText;
    const isLegal = currentValue === ".";
   
    return isLegal;
}

const checkWinner = function(){
    return false;
}

const checkDraw = function(){
    return true;
}

const showWinner = function(){
    const gameResultElem = document.getElementById("gameResult");
    gameResultElem.innerText = "You Win!";
}

const showDraw = function(){
    const gameResultElem = document.getElementById("gameResult");
    gameResultElem.innerText = "It's a Draw!";
}

containerElem.addEventListener("click", handleContainerClick);