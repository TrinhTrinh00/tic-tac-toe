const containerElem = document.getElementById("container");
const handleContainerClick = function(e){
    console.log(e.target.attributes[1].value);
}

containerElem.addEventListener("click", handleContainerClick);