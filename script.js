let i=0;
let boxes="1";

function drawPage () {
    let welcomeBox = document.createElement('h1');
    let messageBox = document.createElement('h2');
    welcomeBox.textContent='Etch a Sketch';
    messageBox.textContent='Feel free to draw in the grid below'
    welcomeBox.id='welcomeBox';
    messageBox.id='messageBox';
    let mainFlex = document.createElement('div');
    let mainWindow = document.createElement('div');
    mainFlex.id='mainFlex';
    mainWindow.id='mainWindow';
    document.body.appendChild(welcomeBox);
    document.body.appendChild(messageBox);
    document.body.appendChild(mainFlex);
    mainFlex.appendChild(mainWindow);
    drawGrid();
}

function drawGrid () {
    for (i; i<256; i++) {
        let div = document.createElement('div');
         div.id=`box${i+1}`;
         div.className='boxes';
         div.innerHTML = '.';
         mainWindow.appendChild(div);
         };
}

drawPage();
console.log(typeof boxes);

function changeColor () {
   boxes = document.getElementById(`box${i+1}`);
   console.log(typeof boxes);
   if (boxes){
    console.log('jest ok')
    boxes.classList.add('colored');
   } 
   console.log('jestem za daleko');  
}

addEventListener('mouseover',changeColor());
   changeColor();
   console.log(typeof boxes);


