const containerElem = document.getElementById("container");
const handleContainerClick = function(e){
    const cellElem = e.target;
    const dataCell = e.target.attributes[1];
    console.log(dataCell.value);
    cellElem.innerText = "X";
}

containerElem.addEventListener("click", handleContainerClick);