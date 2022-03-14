const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');
const inputGrid = document.querySelector('#inputNumGrid');
const inputColor = document.querySelector('#inputColor');
const title = document.querySelector('h1');

//Initial values
numSqr = inputGrid.value;
colorSqr = inputColor.value;
modifyGrid (numSqr, colorSqr);

//Event Listener for range input
inputGrid.addEventListener("change", () => {
    removeGrid (numSqr);
    numSqr = inputGrid.value;
    modifyGrid (numSqr, colorSqr);
});

//Event Listener for range color
inputColor.addEventListener("change", () => {
    colorSqr = inputColor.value;
    modifyColor(colorSqr);
    changeProp(colorSqr);
});

//When btnClear is clicked the background of the divs become black
function clickClear () {
    const divs = container.querySelectorAll('div');
    divs.forEach (divs => divs.style.background = "black")
};

//when a new color is selected the divs' event listener change 
function modifyColor (colorGrid){
    //Add event listener to divs
    const divs = container.querySelectorAll('div');
    var i=0;
    divs.forEach (divs => divs.addEventListener("mouseover", function(e) {
        // highlight the mouseover target
        e.target.style.background = colorGrid;}));
};

//This function changes some objets properties 
function changeProp (colorGrid){
    //Change style properties 
    title.style.textShadow = `-3px 4px 9px ${colorGrid}`;
    container.style.border = `3px solid ${colorGrid}`;
    btnContainer.style.border = `3px solid ${colorGrid}`;
    $( "button" ).css( "box-shadow", `-3px 4px 9px ${colorGrid}` );
};

//Function that returns different scales of grey
function scaleGrey (){
    let words = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
    var color = '#'+ words[Math.floor(Math.random()*15)].repeat(6);
    return color;
};

//when grid's size is changed this function creates a new one 
function modifyGrid (numGrid, colorGrid) {
    $( ".container" ).css( "grid-template-columns", `repeat(${numGrid},1fr)` );
    $( ".container" ).css( "grid-template-rows", `repeat(${numGrid},1fr)` );
    
    for (var i=0;i < numGrid*numGrid;i++) {
        const div = document.createElement('div');
        //identify them by the id: grid-item-(num)
        div.id = `grid-item-${i}`;
        //append the grid-item in the cointainer
        container.appendChild(div);
    };
    modifyColor(colorGrid);
}

//Remove the initial grid
function removeGrid (numGrid) {
    for (var i=0;i < numGrid*numGrid;i++) {
        const div = document.getElementById(`grid-item-${i}`);
        div.remove();
    };
};

