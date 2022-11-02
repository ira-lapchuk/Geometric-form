function showResult(){
    const backgroundColorEl = document.getElementById("bgd-color");
    const borderColorEl = document.getElementById("br-color");
    const borderRadiusEl = document.getElementById("br-rds");
    const borderWidthEl = document.getElementById("br-w");

    let shapeEl = document.getElementById("shp");

    
    shapeEl.style.backgroundColor = backgroundColorEl.value;
    shapeEl.style.borderColor = borderColorEl.value;
    shapeEl.style.borderRadius = borderRadiusEl.value;
    shapeEl.style.borderWidth = borderWidthEl.value;
}