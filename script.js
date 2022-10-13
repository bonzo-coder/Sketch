let i=0;
let s=16;
let welcomeBox = document.createElement('h1');
let messageBox = document.createElement('h2');
let mainFlex = document.createElement('div');
let mainWindow;
let button= document.createElement('button');
let div = document.createElement('div');


function drawPage () {
    welcomeBox.textContent='Etch a Sketch';
    messageBox.textContent='Feel free to draw in the grid below'
    welcomeBox.id='welcomeBox';
    messageBox.id='messageBox';
    mainFlex.id='mainFlex';
    button.type='button';
    button.id='buttonChoose';
    button.textContent='Change grid size';
    document.body.appendChild(welcomeBox);
    document.body.appendChild(messageBox);
    document.body.appendChild(mainFlex);
    mainFlex.appendChild(button);
    drawGrid();
}

function drawGrid () {
    console.log(s);
    mainWindow = document.createElement('div');
    mainWindow.id='mainWindow';
    mainFlex.appendChild(mainWindow);
    for (i; i<s*s; i++) {
         div = document.createElement('div');
         div.id=`box${i+1}`;
         div.className='boxes';
         div.innerHTML = '';
         div.style.width=`${(400-2*s)/s}px`;
         div.style.height=`${(400-2*s)/s}px`;
         div.addEventListener('mouseover',(event) => 
         {	
             event.target.classList.add('colored');  
         });
         mainWindow.appendChild(div);
         };
    chooseGrid();
}

function cleanGrid () {
    let main = document.getElementById('mainWindow');
    main.remove('mainWindow');
}

function chooseGrid () {
    button.addEventListener('click', function() {
        cleanGrid();
        s = parseInt(prompt("Type a number from 1 to 100"));
        i=0;
        drawGrid();
    });
}

function buttonChoose () {
    
}

drawPage();






