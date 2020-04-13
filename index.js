let playerId = 0;
const containerElem = document.getElementById("container");
const handleContainerClick = function(e){
    const cellElem = e.target;
    const dataCell = e.target.attributes[1];//e.target["data-cell"]
    console.log(dataCell.value);
    cellElem.innerText = setCellValue();
    playerId = playerId + 1;
}
const setCellValue = function(givenCellElem){
    if(playerId % 2 == 0){
        return "X";   
    }
    else{
        return "O";
    }
}

containerElem.addEventListener("click", handleContainerClick);