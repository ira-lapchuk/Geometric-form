
function showRed() {
    const backgroundRedEl = document.getElementById("bkg-red");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.backgroundColor = "red";
}

function showBlue() {
    const backgroundBlueEl = document.getElementById("bkg-blue");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.backgroundColor = "blue";
}
    
function showGreen() {
    const backgroundGreenEl = document.getElementById("bkg-green");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.backgroundColor = "green";
}

function showBorderRed() {
    const borderRedEl = document.getElementById("brd-red");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.borderColor = "red";
}

function showBorderBlue() {
    const borderBlueEl = document.getElementById("brd-blue");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.borderColor = "blue";
 }
    
function showBorderGreen() {
    const borderGreenEl = document.getElementById("brd-green");
    let shapeEl = document.getElementById("shp");

    shapeEl.style.borderColor = "green";
}  

function showResult(){
    const borderRadiusEl = document.getElementById("br-rds");
    const borderWidthEl = document.getElementById("br-w");

    let shapeEl = document.getElementById("shp");

    
    shapeEl.style.borderRadius = borderRadiusEl.value;
    shapeEl.style.borderWidth = borderWidthEl.value;  
}